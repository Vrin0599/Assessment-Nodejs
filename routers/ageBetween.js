const ageBetween = (req, res) => {
  let count = 0;

  req.body.results.forEach((item) => {
    if (item.dob.age > 50 && item.dob.age < 70) {
      count++;
    }
  });

  res.status(200).send({ "Age between 50 and 70": count });
};

module.exports = ageBetween;
