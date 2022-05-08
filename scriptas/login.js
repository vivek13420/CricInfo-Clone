document.querySelector("#login1").addEventListener("click", loginFun);
var regdUsers = JSON.parse(localStorage.getItem("userdetail"));
//console.log(regdUsers);

function loginFun() {
  event.preventDefault();
  var enteredEmail = document.querySelector("#email").value;
  var enteredPass = document.querySelector("#pass").value;
  //console.log(email, pass);

  for (var i = 0; i < regdUsers.length; i++) {
    //console.log(regdUsers[i]);
    if (
      regdUsers[i].email == enteredEmail &&
      regdUsers[i].password == enteredPass
    ) {
      alert("login success");
      document.querySelector("#email").value=null
      window.location.href = "profile.html";
      break;
    } 
    else {
      // console.log("login failed");
      // alert("login failed")
      // window.location.href ="login.html";
    }
  }
}