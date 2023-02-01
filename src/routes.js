const express = require("express");
const router = express.Router();
const db = require("./db");

router.post("/api/subscribe", async (req, res) => {
  const email = req.body.email;

  // Validate email
  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    // Save email to database
    await db.addEmail(email);

    // Return success response
    return res.status(200).json({ message: "Successfully subscribed." });
  } catch (error) {
    // Return error response
    return res.status(500).json({ message: "Failed to subscribe." });
  }
});

module.exports = router;
