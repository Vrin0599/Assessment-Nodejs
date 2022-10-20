const userInfo = (req, res) => {
  const display = [];

  req.body.results.forEach((item) => {
    display.push(
      `${item.name.title} ${item.name.first} ${item.name.last} | ${item.email}`
    );
  });

  res.status(200).send({ "User informations (Name | Email)": display });
};

module.exports = userInfo;
