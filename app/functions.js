exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr)
  },

  speak : function(fn, obj) {
    return fn.call(obj, obj)
  },

  functionFunction : function(str) {
    return function(str2){
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    var funcs = [];
    
    arr.forEach(function(item){
      funcs.push(fn.bind(this, item))
    })
    
    return funcs
  },

  partial : function(fn, str1, str2) {
    return fn.bind(this, str1, str2)
  },

  useArguments : function() {
    var args = Array.prototype.slice.call(arguments);
    
    return args.reduce(function(a,b){
      return a+b
    })
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    
    return fn.apply(this, args)
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    args.forEach(function(arg){
      fn = fn.bind(this, arg);
    })
    
    return function(){
      return fn.apply(this, arguments)
    }
  },

  curryIt : function(fn) {
    return function(newArg){
//      console.log(fn.bind(this, newArg).length);
      return fn.bind(this, newArg)
    }
  }
};
