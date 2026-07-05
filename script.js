document.addEventListener("DOMContentLoaded", () => {

  /* ==============================
     🔎 BUSCA INTELIGENTE
  ============================== */
  const input = document.getElementById("busca");
  const produtos = document.querySelectorAll(".produto");

  if (input) {
    input.addEventListener("input", () => {
      let valor = input.value.toLowerCase().trim();

      produtos.forEach(produto => {
        let nome = produto.getAttribute("data-nome")?.toLowerCase() || "";
        let titulo = produto.querySelector("h2")?.innerText.toLowerCase() || "";

        if (nome.includes(valor) || titulo.includes(valor)) {
          produto.style.display = "block";
        } else {
          produto.style.display = "none";
        }
      });
    });
  }

  /* ==============================
     ⭐ ANIMAÇÃO DE ENTRADA
  ============================== */
  produtos.forEach((produto, index) => {
    produto.style.opacity = "0";
    produto.style.transform = "translateY(20px)";

    setTimeout(() => {
      produto.style.transition = "0.5s ease";
      produto.style.opacity = "1";
      produto.style.transform = "translateY(0)";
    }, index * 100);
  });

  /* ==============================
     🛒 FEEDBACK NO CLIQUE DO BOTÃO
  ============================== */
  const botoes = document.querySelectorAll(".produto a");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      botao.innerText = "Redirecionando...";
      setTimeout(() => {
        botao.innerText = "Comprar";
      }, 1500);
    });
  });

});
