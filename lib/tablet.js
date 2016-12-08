function Tablet(x, y){
  this.x = x;
  this.y = y;
}

Tablet.prototype.touch = function(x,y) {
  return {x, y};
};

module.exports = Tablet;