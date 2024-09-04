// routes/route.js
exports.home = function (req, res) {
    res.render('home');
};

exports.contact = function (req, res) {
    res.render('contact');
};

exports.submitContact = function (req, res) {
    // Traitement du formulaire de contact
    res.send('Formulaire soumis');
};
