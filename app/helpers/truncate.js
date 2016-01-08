import Ember from 'ember';
//{{truncate message}}
//{{truncate string limit=10}}

Ember.Handlebars.helper('truncate', function(text, options){
  var limit = options.hash.limit || 99;
  if (text.length > limit){
    text = text.substr(0, limit - 3) + "...";
  }
  return text;
});
