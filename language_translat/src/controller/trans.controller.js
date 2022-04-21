
const express = require("express");
const router = express.Router();

const TransData = require("../model/trans.model");

const translate = require("@vitalets/google-translate-api");


// sourceText: {type: string},
//     translateTo

router.post("/", (req, res) => {
  try {
    
    translate(req.body.sourceText, { to: req.body.translateTo })
      .then((response) => {
        const data = TransData.create(req.body);
        res.send(response.text);
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});


module.exports = router;