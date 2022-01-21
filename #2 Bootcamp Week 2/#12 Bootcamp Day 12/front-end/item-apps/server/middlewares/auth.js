const { tokenVerifier } = require('../helpers/jwt');

const Authentication = (req, res, next) => {
    console.log("Authentication Middleware");

    const { access_token } = req.headers;

    if (access_token) {
        try {
            let verify = tokenVerifier(access_token);
            req.userData = verify;
    
            next();
        } catch (e) {
            res.status(401).json({
                message: "User not authenticated!."
            });
        };
        // console.log(access_token);
    } else {
        res.status(404).json({
            message: "Token not found!."
        });
    };

    next();
};

module.exports = {
    Authentication
};