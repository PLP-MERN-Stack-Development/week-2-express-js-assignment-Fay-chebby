const { body, validationResult } = require("express-validator");

const validateProduct = [
  body("id").notEmpty().withMessage("ID is required"),
  body("name").notEmpty().withMessage("Name is required"),
  body("price").isNumeric().withMessage("Price must be a number"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateProduct };
