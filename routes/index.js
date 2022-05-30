const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

router.use("/home", homeRoutes);
router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  console.log(req.session.loggedIn);
  if (req.session.loggedIn === undefined) {
    res.render("home", { loggedIn: false });
  } else res.render("home", { loggedIn: true });
});

router.get("/signup", (req, res) => {
  res.render("signup-modal");
});

router.get("/login", (req, res) => {
  res.render("login-modal");
});

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
