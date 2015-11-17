var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/bb-instapups',
  idAttribute: '_id',
  defaults: {
    picture_url: "http://i.imgur.com/nZlaeSH.jpg",
    text: "This is a picture",
    likes: "",
  },
  initialize: function () {
    console.log("hello");
  }
});
