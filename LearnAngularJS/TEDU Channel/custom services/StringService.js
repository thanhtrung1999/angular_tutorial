myApp.factory('StringService', function () {
  return {
    transformString: function (input) {
      if (input !== '') {
        let output = ''
        for(let i = 0; i < input.length; i++) {
          if (i > 0 && input[i] === input[i].toUpperCase()) {
            output += " "
          }
          output += input[i]
        }
        return output
      }
    }
  }
})