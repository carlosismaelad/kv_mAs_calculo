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
  const masAp = kvAp / 3;
  const medidaPerfil = parseFloat(valorPerfil);
  const kvPerfil = 2 * medidaPerfil + defaultEquipamento;
  const masPerfil = kvPerfil / 3;

  document.getElementById(
    "apresentantion-and-result"
  ).innerHTML = `Seguem os valores: <br> AP: KV = ${kvAp.toFixed(
    0
  )} // mAs = ${masAp.toFixed(0)}<br>PERFIL: KV = ${kvPerfil.toFixed(
    0
  )} // mAs = ${masPerfil.toFixed(0)}`;

  changeButtonForClean();
}

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
