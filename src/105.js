var n = {
  currentScrollLeft: 0,
  currentScrollTop: 0,
  refreshScrollValues: function (e) {
    n.currentScrollLeft = e.x;
    n.currentScrollTop = e.y;
  }
};
module.exports = n;