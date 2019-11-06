module.exports = {
  getUser: (req, res) => {
    const { id } = req.params;
    console.log(id, "rtrrrr");
    const db = req.app.get("db");
    db.get_profile(+id)
      .then(data => res.status(200).send(data[0]))
      .catch(err => console.log(err));
  },
  addForm: (req, res) => {
    const db = req.app.get("db");
    const { id, date, amount, type, balance, rate, payment } = req.body;
    console.log(req.body);
    db.add_form(id, date, amount, type, balance, rate, payment)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  },
  generateChartInfo: (req, res) => {
    const { data, rows } = req.body;
    const amount = data[0].amount;
    let date = data[0].date;
    let payment = data[0].payment;
    let disposable = amount - payment;
    let sortedDebt = data.sort(function(a, b) {
      return b.rate - a.rate;
    });
    let chartInfo = [
      {
        date: [
          "January",
          "February",
          "March",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        amount,
        payment,
        disposable,
        savings: 0,
        debtInfo: sortedDebt
      }
    ];

    for (let i = 0; i < 20; i++) {
      let newChartDate = {
        date: chartInfo[i].date[i],
        amount: chartInfo[i].amount,
        payment: 0,
        disposable: 0,
        savings: chartInfo[i].savings,
        debtInfo: []
      };
      let payoff = newChartDate.amount - chartInfo[i].payment;

      let updatedDebt = chartInfo[i].debtInfo;
      updatedDebt.map(element => {
        if (element.balance !== 0) {
          if (element.balance - payoff > 0) {
            element.balance = element.balance - payoff;
            element.payment = element.balance * ((element.rate / 100) * 0.05);
            payoff = 0;
          } else if (element.balance - payoff === 0) {
            element.balance = 0;
            element.payment = 0;
            payoff = 0;
          } else {
            payoff = payoff - element.balance;
            element.balance = 0;
            element.payment = 0;
          }
        }
      });
      newChartDate.savings += payoff;

      newChartDate.debtInfo = updatedDebt;
      for (let j = 0; j <= rows; j++) {
        newChartDate.payment += chartInfo[i].debtInfo[j].payment;
      }
      newChartDate.disposable = newChartDate.amount - newChartDate.payment;
      chartInfo.push(newChartDate);
    }
    req.session.chartInfo = chartInfo;
    res.status(200).send(req.session.chartInfo);
  },
  // deleteRow: (req, res) => {
  //   const db = req.app.get("db");
  //   const { id } = req.params;
  //   db.delete_row(id)
  //     .then(data => res.status(200).send(data))
  //     .catch(err => console.log(err));
  // },edit
  getData: (req, res) => {
    const { id, date, amount, type, balance, rate, payment } = req.params;
    const db = req.app.get("db");
    db.get_data(id, date, amount, type, balance, rate, payment)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }
};
