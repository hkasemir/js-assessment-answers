exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /[0-9]/.test(str);
  },

  containsRepeatingLetter : function(str) {
    return /([a-z])\1/i.test(str)
  },

  endsWithVowel : function(str) {
    return /([aeiou])$/i.test(str)
  },

  captureThreeNumbers : function(str) {
    var match = /\d{3}/.exec(str);
    return match ? match[0] : false
  },

  matchesPattern : function(str) {
    return /\b\d{3}-\d{3}-\d{4}\b/.test(str)
  },
  
  isUSD : function(str) {
    return /^\$\d{1,3}(,\d{3})*(\.\d{2}){0,1}$/.test(str)
  }
};
