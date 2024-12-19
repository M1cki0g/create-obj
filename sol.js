function create(radius) {
  return {
    radius,
    aff: function () {
      console.log("draw " + this.radius);
    },
  };
}

let circle = create(5);
circle.aff();
