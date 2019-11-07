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
    // console.log(req.body);
    db.add_form(+id, date, amount, type, balance, rate, payment)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  },
  generateChartInfo: (req, res) => {
    const { data, rows } = req.body;
    // console.log(data);
    // console.log(rows);

    const amount = +data[0].amount;
    // console.log(typeof amount);
    // console.log(amount);
    let date = data[0].date;
    // console.log(date);
    // console.log(data[1]);
    let payment = 0;
    for (let j = 0; j <= rows; j++) {
      payment += +data[j].payment;
    }
    // console.log(payment);

    // let payment = data[0][0].payment;
    let disposable = +amount - +payment;
    // console.log(disposable);

    let sortedDebt = data.sort(function(a, b) {
      return b.rate - a.rate;
    });

    // let months = ;

    // for (let m = 0; m < months.length; m++) {
    //   if (m === months.length) {
    //     m = 0;
    //   }
    //   // let date = months[m];
    //   console.log(months[m]);
    // }

    let chartInfo = [
      {
        date: date,
        // [
        //   "January",
        //   "February",
        //   "March",
        //   "April",
        //   "May",
        //   "June",
        //   "July",
        //   "August",
        //   "September",
        //   "October",
        //   "November",
        //   "December"
        // ],
        amount: +amount,
        payment: +payment,
        disposable: +disposable,
        savings: 0,
        beginningDebt: sortedDebt,
        endingDebt: sortedDebt
      }
    ];

    for (let i = 0; i < 30; i++) {
      let newChartDate = {
        date: date,
        amount: chartInfo[i].amount,
        payment: 0,
        disposable: chartInfo[i].disposable,
        savings: chartInfo[i].savings,
        // beginningDebt: chartInfo[i].endingDebt,
        endingDebt: chartInfo[i].endingDebt
      };
      // console.log(newChartDate.payment);
      let payoff = newChartDate.amount - chartInfo[i].payment;
      // console.log(payoff);
      let updatedDebt = chartInfo[i].endingDebt;
      updatedDebt.map(element => {
        if (element.balance !== 0) {
          if (element.balance - payoff > 0) {
            element.balance = element.balance - payoff;
            element.payment = element.balance * ((element.rate / 100) * 0.07);
            payoff = 0;
          } else if (element.balance - payoff === 0) {
            element.balance = 0;
            element.payment = 0;
            payoff = 0;
            disposable = 0;
          } else {
            payoff = payoff - element.balance;
            element.balance = 0;
            element.payment = 0;
          }
          console.log(element.balance);
          // console.log(element.payment);
        }
      });

      newChartDate.savings += payoff;

      newChartDate.endingDebt = updatedDebt;
      // console.log(updatedDebt);
      for (let j = 0; j <= rows; j++) {
        newChartDate.payment += chartInfo[i].endingDebt[j].payment;
      }
      newChartDate.disposable = newChartDate.amount - newChartDate.payment;

      chartInfo.push(newChartDate);
      // console.log(chartInfo);
    }
    req.session.chartInfo = chartInfo;
    // console.log(req.session.chartInfo);
    res.status(200).send(req.session.chartInfo);
  },

  getData: (req, res) => {
    const { id, date, amount, type, balance, rate, payment } = req.params;
    const db = req.app.get("db");
    db.get_data(id, date, +amount, type, +balance, +rate, +payment)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }
};
