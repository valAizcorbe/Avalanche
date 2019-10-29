const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { email, password, firstName, lastName, phone } = req.body;
    const db = req.app.get("db");
    let sameUser = await db.check_email(email);
    sameUser = sameUser[0];
    if (sameUser) {
      res.status(409).send("Email already registered");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    let newUser = await db.register(email, hash);
    newUser = newUser[0];
    req.session.user = { ...newUser };
    return res.status(200).send(req.session.foundUser);
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    let foundUser = await db.check_email(email);
    foundUser = foundUser[0];
    if (!foundUser) {
      return res.status(401).send("Email not registered");
    }
    let authenticated = bcrypt.compareSync(password, foundUser.password);
    if (authenticated) {
      delete foundUser.password;
      req.session.user = foundUser;
      res.status(202).send(req.session.user);
    } else {
      res.status(401).send("Password is incorrect");
    }
  }
};
