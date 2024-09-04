exports.home = function (req, res) {
  res.render("home");
};

exports.login = function (req, res) {
  res.render("login");
};

exports.contact = function (req, res) {
  res.render("contact");
};

exports.submitContact = function (req, res) {
  if (req.body && req.body.name && req.body.email && req.body.message) {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    console.log(
      `Received contact form submission: ${name}, ${email}, ${message}`
    );

    res.render("contact", {
      message: "Thank you for reaching out! We will get back to you soon.",
    });
  } else {
    // Handle the case where the body is not properly populated
    res.render("contact", {
      message: "There was an error processing your request. Please try again.",
    });
  }
  res.render("contact", {
    message: "Thank you for reaching out! We will get back to you soon.",
  });
};
