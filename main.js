var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var PictureCollection = require('./pictureCollection');
var PictureModel = require('./pictureModel');

var pictureCollection = new PictureCollection();

$(document).ready(function (){

instaPage.init();

});

var instaPage = {
  init: function(){
    instaPage.styling();
    instaPage.events();
  },
  styling: function(){
    instaPage.createInputBox();
    instaPage.loadPictures();
    instaPage.createPicture();
  },
  events: function(){
    // instaPage.favoritePicture();
  },
  createInputBox: function(){
    $(".submit-section").append('<form><input type="url" name="pictureUrl" value="Picture Url" />' +
              '<input type="text" name="text" value="Caption" />' +
              '<input type="submit" name="Submit" class="something" /></form>');
  },

  loadPictures: function (photoData) {
    var pictureCollection = new PictureCollection();
    pictureCollection.fetch().then(function(photoData){
      var instaTemplate = _.template(template.instaTmpl);
      _.each(photoData ,function (currVal, idx, arr) {
        var newPic = instaTemplate(currVal);
        $(".photos").prepend(newPic);
        if(likes < 1){
          $('.favorite').addClass('glyphicon-heart-empty')
        } else {
          $('.favorite').on('click', function(event){
            event.preventDefault();
          $('.favorite').addClass('glyphicon-heart');
          $('.number').append(newPic.likes + 1);
        });
      }
      });
    });
  },

  createPicture: function() {
    $(".submit-section").on('submit', function(event){
      event.preventDefault();
    var newPic = new PictureModel({
      picture_url: $('input[name="pictureUrl"]').val(),
      text: $('input[name="text"]').val(),
    });
    newPic.save();
    instaPage.loadPictures;
  })
},

  // favoritePicture: function() {
  //     if(likes < 1){
  //       $('.favorite').addClass('glyphicon-heart-empty')
  //     } else {
  //       $(".photos").on('click', function(event){
  //         event.preventDefault();
  //       $('.favorite').addClass('glyphicon-heart');
  //       $('.photos').find('.number').append(likes++);
  //     });
  //   }
  // }
}
