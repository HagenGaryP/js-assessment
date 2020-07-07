/* eslint-disable no-implicit-globals */
exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return {
      then: function(callback) {
        callback(value);
      }
    };
  },

  manipulateRemoteData: function(url) {

  }
};
