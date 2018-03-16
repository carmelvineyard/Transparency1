const db = require("../models");

module.exports = {
    create: function(req, res) {
        const user = {
            firstName: req.body.firstName,
            email: req.body.email,
            zipCode: req.body.zipCode,
            password: req.body.password
        };
        db.User
            .create(user)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err))
    }
};