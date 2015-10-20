exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    
    console.log(start++);
    var interval = setInterval(function(){
      if (start > end){
        clearInterval(interval);
        return
      }
      console.log(start++);
    }, 100);
    
    return {
      cancel: function(){
        clearInterval(interval);
      }
    }
    
  }
};