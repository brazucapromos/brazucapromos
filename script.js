const input = document.getElementById("busca");
const produtos = document.querySelectorAll(".produto");

input.addEventListener("keyup", function () {
  let valor = input.value.toLowerCase();

  produtos.forEach(p => {
    let nome = p.getAttribute("data-nome");

    if (nome.includes(valor)) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
});
