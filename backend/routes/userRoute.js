const express = require('express');
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    updateProfile,

} = require("../controllers/userControllers");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();



router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

//protected User route auth
router.get("/user", (req, res) => {
    res.status(200).send({ ok: true });
});

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update/:id").put(updateProfile);

module.exports = router
