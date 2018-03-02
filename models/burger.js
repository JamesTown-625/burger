var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {

    orm.all("burgers", function(res) {
      cb(res);
    });
    
  },
  // The variables cols and vals are arrays.
  create: function(burger_name, cb) {

    orm.create(burger_name, cb);

  },
  update: function(values, condition, cb) {
    orm.update("burgers", values, condition, cb)

  },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;