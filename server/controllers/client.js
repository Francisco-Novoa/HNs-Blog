const clientRouter = require("express").Router()



// will redirect all the non-api routes to react frontend
clientRouter.get(function(req, res) {
    res.sendFile(path.join(__dirname, '../client','build','index.html'));
});

module.exports=clientRouter