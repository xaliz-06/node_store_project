exports.get404 = (req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));

  res.status(404).render("error", {
    pageTitle: "404",
    path: "404",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.get500 = (req, res, next) => {
  res.status(500).render("500", {
    pageTitle: "500",
    path: "500",
    isAuthenticated: req.session.isLoggedIn,
  });
};
