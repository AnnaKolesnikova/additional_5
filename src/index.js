module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false;
  }

  var stringForLoop = '',
    savedString = '';

  while (true) {

    stringForLoop = '';
    for (var i = 0; i < str.length; i++) {


      for (var index = 0; index < bracketsConfig.length; index++) {
        var bracketOp = bracketsConfig[index][0];
        var bracketCl = bracketsConfig[index][1];

        needContinue = false;

        if (str[i] == bracketOp && str[i + 1] == bracketCl) {
          needContinue = true;
          break;
        }
      }
      if (needContinue) {
        i++
        continue;
      }
      stringForLoop += str[i];
    }

    if (savedString == stringForLoop) {
      break;
    }
    savedString = stringForLoop;
    str = stringForLoop;

  }
  return (stringForLoop.length == 0) ? true : false;

}