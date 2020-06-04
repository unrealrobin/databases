var db = require('../db'); //LETS YOU KNOW YOURE INTERACTING WITH DB

module.exports = {

    getAll: function (callback) {
      /*
        1. query the database for all messages
            send back an object with message, username, room
        2. can be filtered by roomName (optional argument)
      */
      let queryString = "select messages.id, messages.text, messages.roomname from messages \
      left outer join users on (messages.userid = user.id) \
      order by messages.id desc";

      db.query(queryString, function(err, results){
        if (err){
          throw err;
        }else{
          callback(results);
        }
      };
    }, // a function which produces all the messages
    create: function (params, callback) {
      //take req data from post request and creates 2 queries to the database
      var queryStr = 'insert into messages(text, userid, roomname) \
                      value (?, (select id from users where username = ? limit 1), ?)';

      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });

      /*
        1. Checks if he user has been stored in the database
            if so, dont do anything
            else if user has not been stored in the database
              add user to user table
        2. Checks the req object for a message and room
            adds a row to the messages table and stores the message and the room
      */
    } // a function which can be used to insert a message into the database

};

//QUERY WITH DB HERE