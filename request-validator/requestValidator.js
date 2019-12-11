
function requestValidator(request) {
  // eslint-disable-next-line no-useless-escape
  const URI_REGEX = '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$';
  let errorMessage = 'Invalid request header: Invalid {Method/URI/Version/Message}';

  const isValidMethod = request.method === 'GET'
  || request.method === 'POST'
  || request.method === 'PATCH'
  || request.method === 'DELETE';

  const isValidVersion = request.version === 'HTTP/0.9'
  || request.version === 'HTTP/1.0'
  || request.version === 'HTTP/1.1'
  || request.version === 'HTTP/2.0';

  const isValidMessage = Boolean(request.message) || request.message === '';

  if (!isValidMethod) {
    errorMessage = errorMessage.replace('{Method/URI/Version/Message}', 'Method');
  } else if (!request.uri.match(URI_REGEX)) {
    errorMessage = errorMessage.replace('{Method/URI/Version/Message}', 'URI');
  } else if (!isValidVersion) {
    errorMessage = errorMessage.replace('{Method/URI/Version/Message}', 'Version');
  } else if (!isValidMessage) {
    errorMessage = errorMessage.replace('{Method/URI/Version/Message}', 'Message');
  } else {
    return request;
  }
  throw Error(errorMessage);
}

export {
  requestValidator,
};
