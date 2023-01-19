const form = document.querySelector("form");
const inputUser = document.getElementById("input-user");
const listGroup = document.querySelector(".list-group");

form.addEventListener("submit", function (event) {
  listGroup.innerHTML += `<li class="list-group-item d-flex justify-content-between align-content-center "><h3>${inputUser.value} </h3><span class="fs-4"><i class="fa-solid fa-trash" id="delete-btn"></i>  <i class="fa-solid fa-circle-check" id"selesai"></i></span></li>`

  inputUser.value = "";
  event.preventDefault();
});

listGroup.addEventListener("click", function (event) {
  if (event.target.id == "delete-btn"){
    event.target.parentElement.parentElement.remove();
  }


});