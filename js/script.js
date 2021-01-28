var app = new Vue({
  el: '#app',
  data: {
    item: [
      'Go for a walk',
      'Practise',
      'Cook something good',
      'Pick up groceries'
    ],
    inputItem: '',
  },
  methods: {
    addItem: function(){
      this.item.push(this.inputItem);
      this.inputItem = '';
    }
  }
});
