let qnt = 0;
const startTime = () =>
  (alertTime = setInterval(function () {
    qnt += 10;
    alert(`Você está nessa pagina a ${qnt}`);
  }, 10000));

const btn0 = function () {
  let p = document.querySelectorAll("p");
  p[0].style.display = "block";
  p[1].style.display = "block";
  p[2].style.display = "block";
  p[3].style.display = "block";
};

const btn1 = function () {
  document.getElementsByClassName("cl1")[0].textContent = "Eu sou o quadrado";

  document.getElementsByClassName("cl1")[1].innerHTML = "Bem fácil de se fazer";
};

const btn2 = function () {
  document.getElementsByClassName("cl2")[0].textContent =
    "É só traçar quatro linhas";

  document.getElementsByClassName("cl2")[1].innerHTML =
    "Sem o seu lápis erguer.";
};

const btn3 = function () {
  let p = document.querySelectorAll("p");

  p[0].style.color = "red";
  p[1].style.color = "red";
  p[2].style.color = "red";
  p[3].style.color = "red";

  p[0].style.fontSize = "x-large";
  p[1].style.fontSize = "x-large";
  p[2].style.fontSize = "x-large";
  p[3].style.fontSize = "x-large";
};

const btn5 = function () {
  let p = document.querySelectorAll("p");

  p[0].style.display = "none";
  p[1].style.display = "none";
  p[2].style.display = "none";
  p[3].style.display = "none";
};

let btns = document.getElementsByTagName("button");
btns[0].addEventListener("click", btn0);
btns[1].addEventListener("click", btn1);
btns[2].addEventListener("click", btn2);
btns[3].addEventListener("click", btn3);
btns[4].addEventListener("click", () => {
  alert("Eu falei para não clicar, garoto teimoso!");
});
btns[5].addEventListener("click", btn5);
