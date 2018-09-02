// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  return getElementsByClassNameHelper(document.body, className);
};

var getElementsByClassNameHelper = function(node, className) {
  const elements = [];
  if (node instanceof Element) {
    if (node.classList.contains(className)) {
      elements.push(node);
    }
  }

  node.childNodes.forEach(function(childNode) {
    const childElements = getElementsByClassNameHelper(childNode, className);
    childElements.forEach(function(childElement) {
      elements.push(childElement);
    });
  });

  return elements;
};
