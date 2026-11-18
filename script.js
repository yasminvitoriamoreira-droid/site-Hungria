const abas = document.querySelectorAll(".aba");
const paginas = document.querySelectorAll(".pagina");
const menu = document.querySelector(".abas");

function abrirPagina(id) {
  paginas.forEach(pagina => pagina.classList.toggle("ativa", pagina.id === id));
  abas.forEach(aba => aba.classList.toggle("ativa", aba.dataset.alvo === id));
  menu.classList.remove("aberto");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

abas.forEach(aba => {
  aba.addEventListener("click", () => abrirPagina(aba.dataset.alvo));
});

document.querySelectorAll("[data-ir]").forEach(botao => {
  botao.addEventListener("click", () => abrirPagina(botao.dataset.ir));
});

document.querySelector(".menu-mobile").addEventListener("click", () => {
  menu.classList.toggle("aberto");
});

const musicas = [
  { nome: "Amor e Fé", detalhe: "Cheiro do Mato • 2020" },
  { nome: "Lembranças", detalhe: "Single • 2016" },
  { nome: "Dubai", detalhe: "Single • 2016" },
  { nome: "Coração de Aço", detalhe: "Single • 2017" },
  { nome: "Não Troco", detalhe: "Single • 2017" },
  { nome: "Um Pedido", detalhe: "Single • 2019" },
  { nome: "Insônia", detalhe: "Com Tribo da Periferia • 2014" },
  { nome: "Temporal", detalhe: "Atmosfera • 2023" },
  { nome: "Preta", detalhe: "Com João Carlos Martins • 2023" },
  { nome: "Cara Metade", detalhe: "Single • 2025" }
];

const lista = document.querySelector("#lista-musicas");
musicas.forEach((musica, indice) => {
  const item = document.createElement("article");
  item.className = "musica";
  const busca = encodeURIComponent(`Hungria ${musica.nome} música oficial`);
  item.innerHTML = `
    <span class="musica-num">${String(indice + 1).padStart(2, "0")}</span>
    <div><h3>${musica.nome}</h3><p>${musica.detalhe}</p></div>
    <a href="https://www.youtube.com/results?search_query=${busca}" target="_blank" rel="noopener">OUVIR ↗</a>
  `;
  lista.appendChild(item);
});
