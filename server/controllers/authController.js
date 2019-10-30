const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { email, password, firstName, lastName, phone } = req.body;
    // console.log(email, password, firstName, lastName, phone);
    const db = req.app.get("db");
    let sameUser = await db.check_email(email);
    console.log(sameUser);
    sameUser = sameUser[0];
    if (sameUser) {
      return res.status(409).send("Email already registered");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    let newUser = await db.register(email, hash, firstName, lastName, phone);
    console.log(newUser);
    newUser = newUser[0];
    req.session.user = { ...newUser };
    res.status(200).send(req.session.user);
  },
  login: async (req, res) => {
    const { emailLog, passwordLog } = req.body;
    // console.log(emailLog, passwordLog);
    const db = req.app.get("db");
    let sameUser = await db.check_email(emailLog);
    // console.log(sameUser);
    sameUser = sameUser[0];
    if (!sameUser) {
      return res.status(401).send("Email not registered");
    }
    let authenticated = bcrypt.compareSync(passwordLog, sameUser.user_password);
    console.log(authenticated);
    if (authenticated) {
      delete sameUser.user_password;
      req.session.user = sameUser;
      res.status(202).send(req.session.user);
    } else {
      res.status(401).send("Password is incorrect");
    }
  },
  logout: async (req, res) => {
    req.session.destroy;
    res.sendStatus(200);
  }
};
