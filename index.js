'use strict';


module.exports = {
  headContent: function(options) {
    // this should return a React element
  },
  extra: function(paths, config) {
    // this should return an object in format
    // {<filename>: <content>}
  },
  preProcessPosts: function(posts) {
    // you can manipulate posts and their metadata here
    // before they are processed
    return posts;
  },
  postProcessPosts: function(posts) {
    // you can manipulate posts and their metadata here
    // after they have been processed
    return posts;
  },
  postProcessPages: function(pages) {
    // you can manipulate pages and their metadata here
    return pages;
  }
};
