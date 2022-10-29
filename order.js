function check() {
      var cakenameselect = document.getElementById("cakenameselect");
      var selectcake = cakenameselect.value
      console.log(selectcake)
      if (selectcake == ("selectcake")){
        document.getElementById("selectcakeerror").innerHTML = "* Please select our product.";
      }
      else {
        document.getElementById("selectcakeerror").innerHTML = "";
      }
    
      var date = document.getElementById("date");
      console.log(date)
      if (!date.value) {
        document.getElementById("delivesdateerror").innerHTML = "* Please fill out the deliver date";
      }
      else {
        document.getElementById("delivesdateerror").innerHTML = "";
      }
      
    var name = document.getElementById("name").value;
    console.log(name)
    if (name.length == 0){
      document.getElementById("nameerror").innerHTML = "* Please fill out your name";
    } else if (name.length > 100) {
      document.getElementById("nameerror").innerHTML = "* Your name should not exceed 100 characters";
    } else{
      document.getElementById("nameerror").innerHTML = "";
    }
    
    var message = document.getElementById("message").value;
    console.log(message)
    if (message.length > 50) {
      document.getElementById("messageerror").innerHTML = "* Your name should not exceed 50 characters";
    } else{
      document.getElementById("messageerror").innerHTML = "";
    }

    var delive = document.getElementById("delive").value;
    console.log(delive)
    if (delive.length == 0){
      document.getElementById("delivestoerror").innerHTML = "* Please fill out the address";
    } else if (delive.length > 500) {
      document.getElementById("delivestoerror").innerHTML = "* Address should not exceed 500 characters";
    } else{
      document.getElementById("delivestoerror").innerHTML = "";
    }
}