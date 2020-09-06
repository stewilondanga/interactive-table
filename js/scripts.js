var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var app = new Vue({

  el: "#app",

  data: {
    rows: 9,
    cols: 9,
    selectedClass: "c-4",
    picture: [],
    initialPicture: [],
    savedPicture: []
  },


  created: function() {
    this.picture = this.getInitialPicture();
    this.initialPicture = this.cloneArray(this.picture);
  },

  methods: {

    save: function() {
      this.savedPicture = this.cloneArray(this.picture);
      console.log(this.savedPicture);
    },

    load: function() {
      this.picture = this.cloneArray(this.savedPicture);
    },

    reset: function() {
      this.picture = this.cloneArray(this.initialPicture);
    },

    clear: function() {
      this.picture = this.cloneArray(this.getBlankPicture());
    },

    cloneArray: function(item) {
      return JSON.parse(JSON.stringify(item));
    },

    setSelectedClass: function(className) {
      this.selectedClass = className;
    },

    updatePicture: function(position) {
      let selectedClass =
        this.picture[position] == this.selectedClass ?
        "c-8" :
        this.selectedClass;
      this.$set(this.picture, position, selectedClass);
    },

    getBlankPicture: function() {
      return ["c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8"];
    },

    getInitialPicture: function() {
      return ["c-8", "c-8", "c-8", "c-3", "c-4", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-2", "c-3", "c-4", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-2", "c-3", "c-4", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-3", "c-4", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-3", "c-4", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-3", "c-4", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-3", "c-4", "c-8", "c-8", "c-8", "c-8", "c-8", "c-8", "c-2", "c-3", "c-4", "c-5", "c-8", "c-8", "c-8", "c-8", "c-8", "c-2", "c-3", "c-4", "c-5", "c-8", "c-8", "c-8"];
    }
  }
});
