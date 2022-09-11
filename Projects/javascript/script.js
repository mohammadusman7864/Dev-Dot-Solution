function colorChange() {
    var dom = document;
    var a = parseInt(dom.getElementById("A").value);
    var color = dom.querySelectorAll("li");

    if (a == color) {
      console.log(a);
    }
    
  }