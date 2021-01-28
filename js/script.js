var app = new Vue({
  el: '#app',
  data: {
    item: [
      'Go for a walk',
      'Practice',
      'Cook something good',
      'Pick up groceries'
    ],
    inputItem: '',
    deleted: [],
  },
  methods: {
    /* 1-inserire il nuovo todo */
    addItem: function(){
      this.item.push(this.inputItem);
      this.inputItem = '';
    },
    /* 2-modificare un todo */
    editItem: function(index){
      const edited = prompt('Edit your item.');
      this.item.splice(index, 1, edited);
    },
    /* 3-spostare il todo nel cestino */
    deleteItem: function(index){
      const toDelete = this.item[index];
      this.deleted.push(toDelete);
      this.item.splice(index, 1);
    },
    /* 4-pulsante per spostare tutti i todo nel cestino */
    deleteAll: function(){
      this.deleted.push(...this.item);
      this.item = [];
    },
    /* 5-ripristinare dal cestino un todo */
    restoreItem: function(index){
      const toRestore = this.deleted[index];
      this.item.push(toRestore);
      this.deleted.splice(index, 1);
    },
    /* 6-eliminare definitivamente un todo dal cestino  */
    trashItem: function(index){
      this.deleted.splice(index, 1);
    },
    /* 7-pulsante per eliminare tutti i todo del cestino */
    trashAll: function(){
      const choise = confirm('Are you sure you want to delete all items for good?');
      if (choise == true) {
        this.deleted = [];
      }
    }
  }
});
