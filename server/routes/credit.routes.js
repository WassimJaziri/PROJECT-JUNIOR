const router = require("express").Router();
const creditController = require("../controllers/credit.controller");

router.get("/", creditController.AllCredits);
router.post("/add", creditController.addCredit);
router.put("/update/:customerName", creditController.updateCredit);
router.delete("/deleteOne/:id", creditController.deleteCredit);

module.exports = router;
