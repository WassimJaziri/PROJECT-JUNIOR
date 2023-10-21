const Credit = require("../database-mongo/credit.model.js");

const AllCredits = async (req, res) => {
  try {
    const credits = await Credit.find();
    res.status(200).send(credits);
  } catch (err) {
    res.status(500).send(err);
  }
};
const addCredit = async (req, res) => {
  try {
    const credit = req.body.credit;
    console.log(req.body);
    const updatedDate = req.body.updatedDate;
    const credits = await Credit.create({
      customerName: req.body.customerName,
      credit: credit,
    });
    res.status(200).send(credits);
  } catch (err) {
    res.status(500).send(err);
  }
};
const updateCredit = async (req, res) => {
  try {
    const { customerName } = req.params;
    const { credit } = req.body;
    const updatedDate = Date.now();

    await Credit.updateOne({ customerName }, { credit, updatedDate });
    const newCred = await Credit.find({ customerName });

    res.status(200).send(newCred);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteCredit = async (req, res) => {
  const customerName = req.params._id;
  try {
    const credits = await Credit.deleteOne({
      customerName: req.params._id,
    });

    res.status(200).send(credits);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  AllCredits,
  addCredit,
  updateCredit,
  deleteCredit,
};
