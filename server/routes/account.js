const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

router.get("/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      req.user,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json(`Can't find user with id of ${id}`, 404);
    }
    return res.status(200).json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// router.get("/:id", authorize, async (req, res) => {
//   try {
//     const user = await pool.query("SELECT username FROM users WHERE id = $1", [
//       req.user,
//     ]);

//     //if would be req.user if you change your payload to this:

//     //   function jwtGenerator(user_id) {
//     //   const payload = {
//     //     user: user_id
//     //   };

//     res.json(user.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

module.exports = router;
