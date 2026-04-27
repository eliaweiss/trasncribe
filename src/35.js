var r = require("./50.js");
var o = require("./90.js");
var a = require("./241.js");
var i = require("./3.js");
var s = require("./266.js");
var u = {};
i(u, a);
i(u, {
  findDOMNode: s("findDOMNode", "ReactDOM", "react-dom", r, r.findDOMNode),
  render: s("render", "ReactDOM", "react-dom", r, r.render),
  unmountComponentAtNode: s("unmountComponentAtNode", "ReactDOM", "react-dom", r, r.unmountComponentAtNode),
  renderToString: s("renderToString", "ReactDOMServer", "react-dom/server", o, o.renderToString),
  renderToStaticMarkup: s("renderToStaticMarkup", "ReactDOMServer", "react-dom/server", o, o.renderToStaticMarkup)
});
u.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r;
u.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o;
module.exports = u;