module.exports = function check(str, bracketsConfig) {
  var openedBrackets = [];
	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < bracketsConfig.length; j++) {
			if (bracketsConfig[j][0] == bracketsConfig[j][1] && str[i]==bracketsConfig[j][0]) {
				if (openedBrackets[openedBrackets.length-1] !== bracketsConfig[j][0]) {
					openedBrackets.push(str[i]);
				} else {
					openedBrackets.pop();
				}

			} else if (str[i] == bracketsConfig[j][0]) {
				openedBrackets.push(str[i]);
			} else if (str[i] == bracketsConfig[j][1]) {
				if (openedBrackets.length == 0) {
					return false;
				} else if (openedBrackets[openedBrackets.length-1] == bracketsConfig[j][0]) {
					openedBrackets.pop();
				}
			}
		}
	}
	if (openedBrackets.length == 0) {
		return true;
	} else {
		return false;
	}
}
