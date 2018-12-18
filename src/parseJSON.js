// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

var parseJSON = function(json) {
  // your code goes here
  var finalObject = {};
  var finalArray = [];

  //if there are double quotations (after fake [] / {} are removed)
  if (json[0] === '"') {
    json = json.substr(1, json.length);
    //make an array wo double quotations and commas
    var arrayWithStrings = json.split(/[\s,"]+/);
    console.log("102", arrayWithStrings);

    //this new array is meant for objects
    var semicolon = ":";
    if (arrayWithStrings.includes(semicolon)) {
      //simply remove the semicolon
      arrayWithStrings = arrayWithStrings.filter(item => item !== semicolon);
      console.log("103", arrayWithStrings);
      //create a real object w this patterned loop
      for (var i = 0; i < arrayWithStrings.length; i++) {
        if (i % 2 === 0) {
          finalObject[arrayWithStrings[i]] = arrayWithStrings[i + 1];
        }
      }
      return finalObject;
    } else {
      return arrayWithStrings;
    }
  }

  //when array is disguised as a string
  if (json[0] === "[" && json[json.length - 1] === "]") {
    //remove the fake [] from the ends of the string
    json = json.substr(1, json.length - 2);
    console.log("127", json);
    //if fake array is empty
    if (!json.length) {
      return finalArray;
    } else {
      console.log("128", json);
      return parseJSON(json);
    }
  }

  //when object is disguised as a string
  if (json[0] === "{" && json[json.length - 1] === "}") {
    //if fake object has nothing
    if (json.length === 2) {
      return {};
    }
    console.log("143", json);
    //remove the fake {} from the ends of the string
    json = json.substr(1, json.length - 2);
    console.log("146", json);
    return parseJSON(json);
  }
};
