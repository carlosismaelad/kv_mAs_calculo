function getContantesIniciais() {
  const valorAp = document.getElementById("espessura-ap").value.trim();
  const valorPerfil = document.getElementById("espessura-perfil").value.trim();

  const defaultEquipamento = parseFloat(
    document.getElementById("const-equipamento").value.trim()
  );
  const medidaAp = parseFloat(valorAp);
  const medidaPerfil = parseFloat(valorPerfil);

  return { defaultEquipamento, medidaAp, medidaPerfil };
}

function validarEntradas() {
  const { medidaAp, medidaPerfil, defaultEquipamento } = getContantesIniciais();

  if (isNaN(valorAp) || valorAp === "" || valorAp === "0") {
    document.getElementById("apresentantion-and-result").innerHTML =
      "Por favor, insira um valor numérico para realizarmos o cálculo.";
    return false;
  }

  if (isNaN(valorPerfil) || valorPerfil === "" || valorPerfil === "0") {
    document.getElementById("apresentantion-and-result").innerHTML =
      "Por favor, insira um valor numérico para realizarmos o cálculo.";
    return false;
  }

  if (
    isNaN(defaultEquipamento) ||
    defaultEquipamento === "" ||
    defaultEquipamento === "0"
  ) {
    document.getElementById("apresentantion-and-result").innerHTML =
      "Por favor, insira um valor numérico válido para a constante do equipamento.";
    return false;
  }

  return true;
}

function calcColumn() {
  const { medidaAp, medidaPerfil, defaultEquipamento } = getContantesIniciais();

  const kvApCol = 2 * medidaAp + defaultEquipamento;
  const kvPerfilCol = 2 * medidaPerfil + defaultEquipamento;

  const masApColuna = kvApCol * 0.8 * 0.85;
  const masPerfilColuna = kvPerfilCol * 0.8 * 0.85;

  document.getElementById(
    "apresentation-and-result"
  ).innerHTML = `AP: KV = ${kvApCol.toFixed(0)} // mAs = ${masApColuna.toFixed(
    0
  )} <br> PERFIL: KV = ${kvPerfilCol.toFixed(
    0
  )} // mAs = ${masPerfilColuna.toFixed(0)}`;
}

function calcAbdomen() {
  const { medidaAp, medidaPerfil, defaultEquipamento } = getContantesIniciais();

  const kvApAbd = 2 * medidaAp + defaultEquipamento;
  const kvPerfilAbd = 2 * medidaPerfil + defaultEquipamento;

  const masApAbdomen = kvApAbd * 0.8;
  const masPerfilAbd = kvPerfilAbd * 0.8;

  document.getElementById(
    "apresentation-and-result"
  ).innerHTML = `AP: KV = ${kvApAbd.toFixed(0)} // mAs = ${masApAbdomen.toFixed(
    0
  )}<br> PERFIL: KV = ${kvPerfilAbd.toFixed(0)} // mAs = ${masPerfilAbd.toFixed(
    0
  )} `;
}

function calcTorax() {
  const { medidaAp, medidaPerfil, defaultEquipamento } = getContantesIniciais();

  const kvApTorax = 2 * medidaAp + defaultEquipamento;
  const kvPerfilTorax = 2 * medidaPerfil + defaultEquipamento;

  const masApTorax = kvApTorax * 0.3;
  const masPerfilTorax = kvPerfilTorax * 0.3;

  document.getElementById(
    "apresentation-and-result"
  ).innerHTML = `AP: KV = ${kvApTorax.toFixed(0)} // mAs = ${masApTorax.toFixed(
    0
  )}<br> PERFIL: KV = ${kvPerfilTorax.toFixed(
    0
  )} // mAs = ${masPerfilTorax.toFixed(0)} `;
}

function atualizarCalculos() {
  const { medidaAp, medidaPerfil, defaultEquipamento } = getContantesIniciais();

  const valorEquipamento = defaultEquipamento.value;

  defaultEquipamento.addEventListener("change", atualizarCalculos);
}

// Função reset
function reset() {
  document.getElementById("espessura-ap").value = "";
  document.getElementById("espessura-perfil").value = "";
  document.getElementById("const-equipamento").value = "30";

  document.getElementById("apresentation-and-result").innerHTML =
    "Insira as medidas abaixo para obter o KV e o mAs a serem usados no exame:";

  document.getElementById("btn-reset").onclick = calcColumn;
}
