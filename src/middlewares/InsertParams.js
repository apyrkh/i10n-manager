function InsertParams(text, params = {}) {
  if (typeof params !== 'object') throw new Error('InsertNamedParams: params is not an object');

  let nextText = text;
  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      nextText = text.replace('{{' + key + '}}', params[key]);
    }
  }

  return nextText;
}

module.exports = InsertParams;
