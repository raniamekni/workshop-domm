var plusBtn = document.getElementsByClassName("plus-btn");
var minBtn = document.getElementsByClassName("min-btn");
var qty = document.getElementsByClassName("quantity");
var total = document.getElementById("total");
var prix1 = document.getElementById("prix1");
var del = document.getElementsByClassName("delete");

plusBtn[0].addEventListener("click", function () {
  qty[0].innerHTML = +qty[0].innerHTML + 1;
  total.innerHTML = +total.innerHTML + +prix1.innerHTML;
});

minBtn[0].addEventListener("click", function () {
  if (+qty[0].innerHTML > 0) {
    document.getElementsByClassName("quantity")[0].innerHTML =
      +qty[0].innerHTML - 1;
    total.innerHTML = +total.innerHTML - +prix1.innerHTML;
  } else {
    alert("paie attention");
  }
});
var prix2 = document.getElementById("prix2");

plusBtn[1].addEventListener("click", function () {
  qty[1].innerHTML = +qty[1].innerHTML + 1;
  total.innerHTML = +total.innerHTML + +prix2.innerHTML;
});

minBtn[1].addEventListener("click", function () {
  if (+qty[1].innerHTML > 0) {
    document.getElementsByClassName("quantity")[1].innerHTML =
      +qty[1].innerHTML - 1;
    total.innerHTML = +total.innerHTML - +prix2.innerHTML;
  } else {
    alert("paie attention");
  }
});

del[0].addEventListener("click", function () {
  del[0].parentElement.style.display = "none";
  total.innerHTML = +total.innerHTML - +qty[0].innerHTML * +prix1.innerHTML;
});
del[1].addEventListener("click", function () {
  del[1].parentElement.style.display = "none";
  total.innerHTML = +total.innerHTML - +qty[1].innerHTML * +prix2.innerHTML;
});
