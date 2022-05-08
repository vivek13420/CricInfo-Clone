document.querySelector("#submit1").addEventListener("click", signUpFun);

var userData = JSON.parse(localStorage.getItem("userdetail"))||[]
function signUpFun() {
  event.preventDefault();

  var userObj = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#pass").value,
  };
  //console.log(userObj);
  userData.push(userObj);
  //console.log(userData)
  localStorage.setItem("userdetail",JSON.stringify(userData))
  alert("Successfully Registered")
  document.querySelector("#email").value=null
  document.querySelector("#pass").value=null
}