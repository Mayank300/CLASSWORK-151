AFRAME.registerComponent("log", {
  schema: {
    message: {
      type: "string",
      default: "Hello World!, How are you?",
    },
  },

  init: function () {
    console.log(this.data.message);
  },
});
