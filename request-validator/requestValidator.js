
function requestValidator(request) {

  if (isMessageValid(request.message)) {
    throw new Error('Invalid request header: Invalid Message');
  } else if (!isValidMethod(request.method)) {
    throw new Error('Invalid request header: Invalid Method');
  } else if (!isValidURI(request.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  } else if (!isValidVersion(request.version)) {
    throw new Error('Invalid request header: Invalid Message');
  } else {
    return request;
  }
}

function isMessageValid(message) {
  return message === undefined;
}

function isValidMethod(method) {
  return method === 'GET' || method === 'POST' || method === 'DELETE';
}

function isValidURI(uri) {
  const URIPattern = /(\w+\.)+[^\s]+/g;
  const EMPTY_STRING = '';
  if (uri === EMPTY_STRING) {
    return false;
  } else {
    return URIPattern.test(uri);
  }
}

function isValidVersion(version) {
  const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  return validVersions.includes(version);
}

export {
  requestValidator,
};
