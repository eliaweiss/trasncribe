function n(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && r[e.type] || t === "textarea");
}
var r = {
  color: true,
  date: true,
  datetime: true,
  "datetime-local": true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};
module.exports = n;