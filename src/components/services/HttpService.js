// Thank you, Mark Price for sharing this with me in your lesson on reflux.

var baseUrl = 'http://localhost:6069';

var service = {
  get: function(url) {
    return fetch(baseUrl + url).then(function(response) {
      return response.json();
    });
  },
  post: function(url, data) {
    return fetch(baseUrl + url, {
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(data)
    }).then(function(response) {
      return response;
    });
  }
}

module.exports = service;
