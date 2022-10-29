function check() {

    var name = document.getElementById("name").value;
    console.log(name)
    if (name.length == 0){
      document.getElementById("nameerror").innerHTML = "* Please fill out your name";
    } else if (name.length > 100) {
      document.getElementById("nameerror").innerHTML = "* Your name should not exceed 100 characters";
    } else{
      document.getElementById("nameerror").innerHTML = "";
    }
  
    var email = document.getElementById("email").value;  
    console.log(email)
    if (email.length == 0){
      document.getElementById("emailerror").innerHTML = "* Please fill out your email";
    } else if (email.length > 100) {
      document.getElementById("emailerror").innerHTML = "* Your email should not exceed 100 characters";
    } else{
      document.getElementById("emailerror").innerHTML = "";
    }

    var subject = document.getElementById("subject").value;  
    console.log(subject)
    if (subject.length == 0){
      document.getElementById("subjecterror").innerHTML = "* Please fill out your subject";
    } else if (subject.length > 100) {
      document.getElementById("subjecterror").innerHTML = "* Your email should not exceed 100 characters";
    } else if(subject.length < 50) {
      document.getElementById("subjecterror").innerHTML = "* Subject should not shorter than 50 characters";
    }
     else{
      document.getElementById("subjecterror").innerHTML = "";
    }
  
    var message = document.getElementById("message").value;
    console.log(message)
    if (message.length == 0){
      document.getElementById("messageerror").innerHTML = "* Please fill out the message";
    } else if (message.length > 100) {
      document.getElementById("messageerror").innerHTML = "* Message should not exceed 500 characters";
    } else{
      document.getElementById("messageerror").innerHTML = "";
    }
  
  }
      