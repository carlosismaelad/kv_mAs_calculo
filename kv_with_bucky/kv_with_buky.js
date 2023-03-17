function calcularKV() {
  const valorAp = document.getElementById("espessura-ap").value.trim();
  const valorPerfil = document.getElementById("espessura-perfil").value.trim();
  const constEquipamento = document
    .getElementById("const-equipamento")
    .value.trim();

  if (isNaN(valorAp) || valorAp === "" || valorAp === "0") {
    document.getElementById("apresentantion-and-result").innerHTML =
      "Por favor, insira um valor numérico para realizarmos o cálculo.";
    return;
  }

  if (isNaN(valorPerfil) || valorPerfil === "" || valorPerfil === "0") {
    document.getElementById("apresentantion-and-result").innerHTML =
      "Por favor, insira um valor numérico para realizarmos o cálculo.";
    return;
  }

  if (
    constEquipamento === "" ||
    isNaN(constEquipamento) ||
    constEquipamento === "0"
  ) {
    document.getElementById("apresentantion-and-result").innerHTML =
      "Por favor, insira um valor numérico válido para a constante do equipamento.";
    return;
  }

  const defaultEquipamento = parseFloat(constEquipamento);
  const medidaAp = parseFloat(valorAp);
  const kvAp = 2 * medidaAp + defaultEquipamento;
  const masAp = kvAp / 2;
  const medidaPerfil = parseFloat(valorPerfil);
  const kvPerfil = 2 * medidaPerfil + defaultEquipamento;
  const masPerfil = kvPerfil / 2;

  document.getElementById(
    "apresentantion-and-result"
  ).innerHTML = `Valores a serem usados: <br> AP: KV = ${kvAp} // mAs = ${masAp} <br> PERFIL: KV = ${kvPerfil} // mAs = ${masPerfil}`;

  changeButtonForClean();
}

/* function calcKvBuckyless() {
  const valorApBuckyless = document.getElementById("espessura-ap-buckyless");
  const valorPerfilBuckyless = document.getElementById(
    "espessura-perfil-buckyless"
  );

  if (
    isNaN(valorApBuckyless) ||
    valorApBuckyless === "" ||
    valorApBuckyless === "0"
  ) {
    document.getElementById("apresentantion-and-result").innerHTML =
      "Por favor, insira um valor numérico para realizarmos o cálculo.";
    return;
  }

  if (
    isNaN(valorPerfilBuckyless) ||
    valorPerfilBuckyless === "" ||
    valorPerfilBuckyless === "0"
  ) {
    document.getElementById("apresentantion-and-result").innerHTML =
      "Por favor, insira um valor numérico para realizarmos o cálculo.";
    return;
  }

  const medidaApBuckyless = parseFloat(valorApBuckyless);
  const kvApBuckyless = 2 * medidaApBuckyless + defaultEquipamento;
  const masApBuckyless = kvApBuckyless / 3;
  const medidaPerfilBuckyless = parseFloat(valorPerfilBuckyless);
  const kvPerfilBuckyless = 2 * medidaPerfilBuckyless + defaultEquipamento;
  const masPerfilBuckyless = kvPerfilBuckyless / 3;

  document.getElementById(
    "apresentantion-and-result"
  ).innerHTML = `Valores a serem usados:<br>AP: KV = ${kvApBuckyless} // MAS = ${masApBuckyless}<br>PERFIL: KV = ${kvPerfilBuckyless} // MAS = ${masPerfilBuckyless}`;

  changeButtonForClean();
} */

function atualizarCalculos() {
  const valorEquipamento = constEquipamento.value;

  constEquipamento.addEventListener("change", atualizarCalculos);
}

// Transformar o botão calcular em um botão de limpar
function changeButtonForClean() {
  const btn = document.getElementById("btn-calc");
  btn.innerHTML = "Limpar";
  btn.onclick = function () {
    document.getElementById("espessura-ap").value = "";
    document.getElementById("espessura-perfil").value = "";
    document.getElementById("const-equipamento");

    document.getElementById("apresentantion-and-result").innerHTML =
      "Insira as medidas abaixo para obter o KV e o mAs a serem usados no exame:";
    btn.innerHTML = "Calcular";
    btn.onclick = calcularKV;
    changeButtonCleanForCalc();
  };
}

// Tornar o botão à função "Calculcar"
function changeButtonCleanForCalc() {
  const btn = document.getElementById("btn-calc");
  btn.innerHTML = "Calcular";
  document.getElementById("const-equipamento").value = "30";
  btn.onclick = calcularKV;
}

// Ativar a leitura da tecla enter do teclado
function handleKeyPressEspessura(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn-calc").click();
    return false;
  }
}

function handleKeyPressConstEquipamento(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn-calc").click();
    return false;
  }
}

document
  .getElementById("espessura-ap")
  .addEventListener("keypress", handleKeyPressEspessura);

document
  .getElementById("const-equipamento")
  .addEventListener("keypress", handleKeyPressConstEquipamento);
