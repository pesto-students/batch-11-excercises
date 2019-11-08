
function requestValidator(httpRequest) {

  validateMethod(httpRequest);
  validateUri(httpRequest);
  validateMessage(httpRequest);
  validateVersion(httpRequest);

  function validateMethod(httpRequest) {
    var validMethods = ['GET', 'POST', 'DELETE']
    var method = httpRequest['method'];
    if (!(method !== undefined && validMethods.includes(method))) {
      throw new Error("Invalid request header: Invalid Method");
    }
  }

  function validateUri(httpRequest) {
    var URI_REGEX = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/
    var uri = httpRequest['uri'];
    if (!(uri !== undefined && URI_REGEX.test(uri))) {
      throw new Error("Invalid request header: Invalid URI");
    }
  }

  function validateMessage(httpRequest) {
    var message = httpRequest['message'];
    if (message === undefined) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }

  function validateVersion(httpRequest) {
    var validVersions = ['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0']
    var version = httpRequest['version'];
    if (!(version !== undefined && validVersions.includes(version))) {
      throw new Error("Invalid request header: Invalid Version");
    }
  }

  return httpRequest;
}

export {
  requestValidator,
};
