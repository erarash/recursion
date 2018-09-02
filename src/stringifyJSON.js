// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === true) {
    return "true";
  } else if (obj === false) {
    return "false";
  }
  if (typeof obj === "number") {
    return obj.toString();
  }
  if (obj === undefined) {
    return "";
  }
  if (obj === null) {
    return "null";
  }
  if (typeof obj === "string") {
    return `"${obj}"`;
  }
  if (Array.isArray(obj)) {
    var stringList = "";
    for (var i = 0; i < obj.length; i++) {
      stringList += stringifyJSON(obj[i]);
      if (i !== obj.length - 1) {
        stringList += ",";
      }
    }
    return `[${stringList}]`;
  }
  if (typeof obj === "object") {
    stringList = "";
    for (var key in obj) {
      if (key !== "undefined" && key !== "functions") {
        stringList += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
      }
    }
    stringList = stringList.substring(0, stringList.length - 1);
    return `{${stringList}}`;
  }
};
