exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var p1 = new Promise(function(resolve){
        resolve(value);
    })
    return p1
  },

  manipulateRemoteData : function(url) {
    
    var p2 = new Promise(function(resolve){
  
      fetch(url).then(function(result){
        result.json().then(function(json){
          var names = [];
          json.people.forEach(function(person){
            names.push(person.name);
          })
          resolve(names.sort());
        })
      })
    })
    return p2
  }
};

