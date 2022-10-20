const genderCount = (req, res) => {
  const results = req.body.results;

  let maleCount = 0;
  let femaleCount = 0;
  let othersCount = 0;

  results.forEach((item) => {
    switch (item.gender) {
      case "male":
        maleCount++;
        break;
      case "female":
        femaleCount++;
        break;
      default:
        othersCount++;
    }
  });

  res.status(200).send({
    male: {
      count: maleCount,
    },
    female: {
      count: femaleCount,
    },
    others: {
      count: othersCount,
    },
  });
};

module.exports = genderCount;
