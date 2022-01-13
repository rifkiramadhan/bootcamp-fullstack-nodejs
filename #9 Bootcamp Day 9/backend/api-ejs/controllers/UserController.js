class UserController {
    static readUser(req, res) {
        res.json({
            message: "User Page",
        });
    };

    static addUser(req, res) {
        res.json({
            message: "Add Todo",
        });
    };

    static findById(req, res) {
        res.json({
            message: "Find todo by id",
        });
    };
};

module.exports = UserController;