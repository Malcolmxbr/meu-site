// 📅 Exibe a data atual no topo da página
const dataElement = document.getElementById("dataAtual"); // Seleciona o span que mostrará a data
const hoje = new Date(); // Obtém a data atual do sistema

// Define o formato de exibição da data em português
const opcoes = { day: "numeric", month: "long", year: "numeric" };

// Insere a data formatada no elemento
dataElement.textContent = hoje.toLocaleDateString("pt-BR", opcoes);

// 🔍 Mostrar/ocultar o campo de busca ao clicar no ícone de lupa
const searchIcon = document.getElementById("toggleSearch"); // Ícone de busca no cabeçalho
const searchForm = document.getElementById("searchForm");   // Campo de busca que será exibido

// Adiciona o evento de clique para alternar visibilidade
searchIcon.addEventListener("click", () => {
  // Se o campo estiver visível, esconde. Se estiver escondido, mostra.
  searchForm.style.display = searchForm.style.display === "block" ? "none" : "block";
});

// 🔁 Scroll horizontal suave (CSS já cuida disso com scroll-behavior)
// Se desejar criar setas para navegar manualmente o menu horizontal,
// podemos usar scrollLeft ou scrollIntoView futuramente.