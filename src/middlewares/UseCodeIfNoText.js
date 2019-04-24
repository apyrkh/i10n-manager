function UseCodeIfNoText(text, parameters, code) {
  return text ? text : code;
}

module.exports = UseCodeIfNoText;
