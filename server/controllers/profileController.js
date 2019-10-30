module.exports = {
  getProfile: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    db.get_profile(id)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }
};
