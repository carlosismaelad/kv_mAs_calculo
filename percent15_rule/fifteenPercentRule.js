function calcPercentRule() {
  const valorKv = document.getElementById("kvForCalc").value.trim();
  const valormAs = document.getElementById("masForCalc").value.trim();

  if (isNaN(valorKv) || valorKv === "" || valorKv === "0") {
    document.getElementById("apresentation-and-result").innerHTML =
      "Por favor, insira um valor numérico para realizarmos o cálculo.";
    return;
  }

  if (isNaN(valormAs) || valormAs === "" || valormAs === "0") {
    document.getElementById("apresentation-and-result").innerHTML =
      "Por favor, insira um valor numérico para realizarmos o cálculo.";
    return;
  }

  const kv = parseFloat(valorKv) * 1.15;
  const mAs = parseFloat(valormAs) / 2;

  document.getElementById(
    "apresentation-and-result"
  ).innerHTML = `O valor atualizado usando a regra dos 15% é: KV = ${kv.toFixed(
    0
  )} // mAs = ${mAs.toFixed(0)}`;

  changeButtonForClean();
}

function changeButtonForClean() {
  const btn = document.getElementById("btn-calc");
  btn.innerHTML = "Limpar";
  btn.onclick = function () {
    document.getElementById("kvForCalc").value = "";
    document.getElementById("masForCalc").value = "";

    document.getElementById("apresentation-and-result").innerHTML =
      "Insira as medidas abaixo para obter o KV e o mAs a serem usados no exame:";
    btn.innerHTML = "Calcular";
    btn.onclick = calcPercentRule;
    changeButtonCleanForCalc();
  };
}

function changeButtonCleanForCalc() {
  const btn = document.getElementById("btn-calc");
  btn.innerHTML = "Calcular";
  btn.onclick = calcPercentRule;
}

function handleKeyPressMasForCalc(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn-calc").click();
    return false;
  }
}

document
  .getElementById("kvForCalc")
  .addEventListener("keypress", handleKeyPressMasForCalc);

document
  .getElementById("masForCalc")
  .addEventListener("keypress", handleKeyPressMasForCalc);
