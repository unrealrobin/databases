var models = require('../models');

module.exports = {
  get: function (req, res) {
    //if get and type send info to models for this file models/messages
    //take the request data and run it in the models folder in order to make a query
    models.messages.getAll((err, result) => {
      if (err) {
        throw err;
      } else {
        res.json(res);
      }
    });

  },
  // a function which handles a get request for all messages
  post: function (req, res) {
    // invoke models.create
    // console.log(req.body);
    //models.create(req);
    //this invokes 2 queries to the db in the models folder
    var params = [ req.body.message, req.body.username, req.body.roomname ]
    models.messages.create(params, function(err, results) {
      if (err) {
        throw err;
      } else {
        res.sendStatus(201);
      }
    });


    res.send(req.body);
  }
};


//QUERYING TO THE DB GETS DONE IN MODELS