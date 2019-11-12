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

  createChartData: (req, res) => {
    const { data, rows } = req.body;
    const amount = +data[0].amount;
    let type = data[0].type;
    let date = data[0].date;
    let balance = data[0].balance;
    let payment = 0;
    for (let j = 0; j <= rows; j++) {
      payment += +data[j].payment;
    }

    let disposable = +amount - +payment;

    let sortedDebt = data;
    sortedDebt.sort(function(a, b) {
      return b.rate - a.rate;
    });

    let chartInfo = [
      {
        date: date,
        type: type,
        amount: amount,
        payment: payment,
        disposable: disposable,
        savings: 0,
        beginningDebt: sortedDebt,
        endingDebt: sortedDebt
      }
    ];

    for (let i = 0; i < 20; i++) {
      let newChartDate = {
        date: date,
        amount: chartInfo[i].amount,
        payment: 0,
        type: chartInfo[i].type,
        disposable: chartInfo[i].disposable,
        savings: chartInfo[i].savings,
        beginningDebt: chartInfo[i].endingDebt,
        endingDebt: chartInfo[i].endingDebt
      };

      let payoff = newChartDate.amount - chartInfo[i].payment;

      let updatedDebt = chartInfo[i].beginningDebt;

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
          } else {
            payoff = payoff - element.balance;
            element.balance = 0;
            element.payment = 0;

            // console.log("payoff", payoff)
          }
        }
      });
      // console.log(updatedDebt);

      newChartDate.savings += payoff;

      newChartDate.endingDebt = updatedDebt;
      // console.log(updatedDebt);
      for (let j = 0; j <= rows; j++) {
        newChartDate.payment += chartInfo[i].endingDebt[j].payment;
        // newChartDate.balance -= chartInfo[i].endingDebt[j].disposable;
      }
      newChartDate.disposable = newChartDate.amount - newChartDate.payment;

      chartInfo.push(newChartDate);
      // const db = req.app.get("db");
      // db.save_chart_date(newChartDate); //Instead of chartInfo.push you can do db.save_chart_date(newChartDate)

      // console.log(chartInfo[0]);
      console.log(newChartDate);
    }
    // const db = req.app.get("db");
    // let result = db
    //   .createChartData()
    //   .then(res.status(200).send(result))
    //   .catch(err => console.log(err));
    req.session.chartInfo = chartInfo;

    // console.log(req.session.chartInfo[0].endingDebt);
    // console.log(req.session.chartInfo);

    res.status(200).send(req.session.chartInfo);
  },

  deleteInfo: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_info(id)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  },

  editInfo: (req, res) => {
    const db = req.app.get("db");
    let { user_id } = req.params;
    let { user_name, user_lastname, user_phone } = req.body;
    db.edit_info(user_name, user_lastname, user_phone, +user_id)
      .then(data => {
        console.log(data[0]);
        res.status(200).send(data[0]);
      })
      .catch(err => console.log(err));
  },

  getData: (req, res) => {
    const { id, date, amount, type, balance, rate, payment } = req.params;
    const db = req.app.get("db");
    db.get_data(id, date, +amount, type, +balance, +rate, +payment)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }
};
