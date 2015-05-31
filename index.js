'use strict';


module.exports = function() {
  return {
    headContent: function(options) {
      // this should return a React element
    },
    extra: function(paths, config) {
      // this should return an object in format
      // {<filename>: <content>}
    },
    preProcessItems: function(posts) {
      // you can manipulate items and their metadata here
      // before they are processed
      return posts;
    },
    postProcessItems: function(posts) {
      // you can manipulate items and their metadata here
      // after they have been processed
      return posts;
    },
  };
};
