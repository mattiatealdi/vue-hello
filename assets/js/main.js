
const app = new Vue({
  


  el: '#app',
  data:{
    message: 'Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.',
    color:'',
    newImg: 'assets/img/space_1.jpg'
  },
  methods:{
    changeColor(newColor){
      this.color = newColor;
    },
    changeTextClass(str) {
      this.color = str;
    },
  }

});
