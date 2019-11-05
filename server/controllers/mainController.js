module.exports = {
  getUser: (req, res) => {
    const { id, firstName, lastName, phone } = req.params;
    // console.log(id, "rtrrrr");
    const db = req.app.get("db");
    db.get_profile(id, firstName, lastName, phone)
      .then(data => res.status(200).send(data))
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
  // deleteRow: (req, res) => {
  //   const db = req.app.get("db");
  //   const { id } = req.params;
  //   db.delete_row(id)
  //     .then(data => res.status(200).send(data))
  //     .catch(err => console.log(err));
  // },
  getData: (req, res) => {
    const { id, date, amount, type, balance, rate, payment } = req.params;
    const db = req.app.get("db");
    db.get_data(id, date, amount, type, balance, rate, payment)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }
};
