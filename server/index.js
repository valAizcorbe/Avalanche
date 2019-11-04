require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const authCtrl = require("./controllers/authController");
const ctrl = require("./controllers/mainController");
const app = express();
const port = SERVER_PORT;
app.use(express.json());

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("db connected");
  })
  .catch(err => console.log(err));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  })
);

//controllers
app.get("/api/profile/:id", ctrl.getUser);
app.post("/api/form", ctrl.addForm);

//auth controller

app.post("/auth/login", authCtrl.login);
app.post("/auth/register", authCtrl.register);
app.post("/auth/logout", authCtrl.logout);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
