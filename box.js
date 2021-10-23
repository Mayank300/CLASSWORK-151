AFRAME.registerComponent("moving_box", {
  schema: {
    moveX: {
      type: "number",
      default: 3,
    },
  },

  tick: function () {
    this.data.moveX = this.data.moveX - 1;
    var pose = this.el.getAttribute("position");
    var rotate = this.el.getAttribute("rotation");
    pose.x = this.data.moveX;
    rotate.x = this.data.moveX;
    rotate.y = this.data.moveX;
    this.el.setAttribute("position", {
      x: pose.x,
      y: pose.y,
      z: pose.z,
    });
    this.el.setAttribute("position", {
      x: rotate.x,
      y: rotate.y,
      z: rotate.z,
    });
  },
});
