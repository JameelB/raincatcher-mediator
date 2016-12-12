if (window && window.angular) {
  module.exports = require('./angular/mediator-ng');
} else {
  module.exports = require('./mediator');
}
