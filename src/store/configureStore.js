const __DEV__ = process.env.NODE_ENV !== "production";

if (__DEV__) {
  module.exports = require("./configureStore.dev");
} else {
  module.exports = require("./configureStore.prod");
}
