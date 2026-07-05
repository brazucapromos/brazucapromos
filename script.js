// ==========================================================================
// BANCO DE DADOS FICTÍCIO DE PRODUTOS (Facilita manutenção e alteração de links)
// ==========================================================================
const PROMOCOES_DIA = [
    {
        id: "p1",
        title: "Smartphone Redmi Note 13 Pro 5G 256GB - Global",
        category: "celulares",
        img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=400&auto=format&fit=crop",
        oldPrice: "2499.00",
        newPrice: "1649.00",
        discount: "34",
        rating: 5,
        /* INDICAÇÃO: SUBSTITUA O LINK ABAIXO PELO SEU LINK DE AFILIADO */
        link: "https://shope.ee/SEU_LINK_AFILIADO_1"
    },
    {
        id: "p2",
        title: "Fone de Ouvido Bluetooth Sem Fio TWS Air Pro",
        category: "games",
        img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop",
        oldPrice: "129.00",
        newPrice: "47.90",
        discount: "62",
        rating: 4,
        /* INDICAÇÃO: SUBSTITUA O LINK ABAIXO PELO SEU LINK DE AFILIADO */
        link: "https://shope.ee/SEU_LINK_AFILIADO_2"
    },
    {
        id: "p3",
        title: "Teclado Mecânico Gamer RGB Switch Blue Anti-Ghosting",
        category: "informatica",
        img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=400&auto=format&fit=crop",
        oldPrice: "299.00",
        newPrice: "134.50",
        discount: "55",
        rating: 5,
        /* INDICAÇÃO: SUBSTITUA O LINK ABAIXO PELO SEU LINK DE AFILIADO */
        link: "https://shope.ee/SEU_LINK_AFILIADO_3"
    },
    {
        id: "p4",
        title: "Robô Aspirador de Pó Inteligente Bivolt Automático",
        category: "casa",
        img: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=400&auto=format&fit=crop",
        oldPrice: "599.00",
        newPrice: "289.00",
        discount: "51",
        rating: 4,
        /* INDICAÇÃO: SUBSTITUA O LINK ABAIXO PELO SEU LINK DE AFILIADO */
        link: "https://shope.ee/SEU_LINK_AFILIADO_4"
    }
];

const PRODUTOS_EM_ALTA = [
    {
        id: "h1",
        title: "Kit 3 Camisetas Masculinas Algodão Premium Casual",
        category: "moda",
        img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=400&auto=format&fit=crop",
        oldPrice: "119.90",
        newPrice: "59.90",
        discount: "50",
        rating: 5,
        /* INDICAÇÃO: SUBSTITUA O LINK ABAIXO PELO SEU LINK DE AFILIADO */
        link: "https://shope.ee/SEU_LINK_AFILIADO_5"
    },
    {
        id: "h2",
        title: "Sérum Facial Vitamina C Anti-Idade Clareador Hidratante",
        category: "beleza",
        img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop",
        oldPrice: "69.00",
        newPrice: "24.90",
        discount: "63",
        rating: 4,
        /* INDICAÇÃO: SUBSTITUA O LINK ABAIXO PELO SEU LINK DE AFILIADO */
        link: "https://shope.ee/SEU_LINK_AFILIADO_6"
    },
    {
        id: "h3",
        title: "Kit Jogo de Panelas Antiaderente Teflon 5 Peças Cozinha",
        category: "cozinha",
        img: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=400&auto=format&fit=crop",
        oldPrice: "249.00",
        newPrice: "142.00",
        discount: "43",
        rating: 5,
        /* INDICAÇÃO: SUBSTITUA O LINK ABAIXO PELO SEU LINK DE AFILIADO */
        link: "https://shope.ee/SEU_LINK_AFILIADO_7"
    },
    {
        id: "h4",
        title: "Mini Compressor de Ar Automático Digital Portátil Pneus",
        category: "automoveis",
        img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=400&auto=format&fit=crop",
        oldPrice: "189.00",
        newPrice: "89.90",
        discount: "52",
        rating: 4,
        /* INDICAÇÃO: SUBSTITUA O LINK ABAIXO PELO SEU LINK DE AFILIADO */
        link: "https://shope.ee/SEU_LINK_AFILIADO_8"
    }
];

// ==========================================================================
// INICIALIZAÇÃO E EVENTOS DOM
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(PROMOCOES_DIA, "promos-container");
    renderProducts(PRODUTOS_EM_ALTA, "trending-container");
    initHeaderScroll();
    initMobileMenu();
    initFAQ();
    initSearch();
    initCategories();
    initNewsletter();
});

// ==========================================================================
// RENDERIZADOR DE CARDS DE PRODUTOS
// ==========================================================================
function renderProducts(productsList, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = productsList.map(prod => {
        const stars = "⭐".repeat(prod.rating);
        return `
            <div class="product-card" data-category="${prod.category}" data-title="${prod.title.toLowerCase()}">
                <span class="product-badge">-${prod.discount}% OFF</span>
                <button class="btn-favorite" onclick="toggleFavorite(this)" aria-label="Favoritar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/></svg>
                </button>
                <div class="product-img-wrapper">
                    <img src="${prod.img}" alt="${prod.title}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${prod.title}</h3>
                    <div class="product-rating">${stars}</div>
                    <div class="price-wrapper">
                        <span class="old-price">R$ ${prod.oldPrice}</span>
                        <span class="new-price">R$ ${prod.newPrice}</span>
                    </div>
                    <a href="${prod.link}" target="_blank" rel="noopener" class="btn btn-primary">Ver na Shopee</a>
                </div>
            </div>
        `;
    }).join('');
}

// Alternar Favorito
function toggleFavorite(button) {
    button.classList.toggle('active');
}

// ==========================================================================
// COMPORTAMENTO DO CABEÇALHO (Efeito de sombra ao rolar)
// ==========================================================================
function initHeaderScroll() {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// Menu Mobile Toggle
function initMobileMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
}

// ==========================================================================
// FAQ ACORDEON (Interatividade de abrir e fechar)
// ==========================================================================
function initFAQ() {
    const questions = document.querySelectorAll(".faq-question");
    questions.forEach(q => {
        q.addEventListener("click", () => {
            const item = q.parentElement;
            item.classList.toggle("active");
            const icon = q.querySelector(".faq-icon");
            if(icon) {
                icon.textContent = item.classList.contains("active") ? "−" : "+";
            }
        });
    });
}

// ==========================================================================
// SISTEMA DE PESQUISA (Front-end reativo)
// ==========================================================================
function initSearch() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;

    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {
            const title = card.getAttribute("data-title");
            if (title.includes(value)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// ==========================================================================
// FILTRO POR CATEGORIAS
// ==========================================================================
function initCategories() {
    const categories = document.querySelectorAll(".category-card");
    
    categories.forEach(cat => {
        cat.addEventListener("click", () => {
            const isAlreadyActive = cat.classList.contains("active");
            
            // Remove ativo de todas
            categories.forEach(c => c.classList.remove("active"));
            
            const cards = document.querySelectorAll(".product-card");
            
            if (isAlreadyActive) {
                // Se clicou na categoria que já estava ativa, limpa filtro e mostra tudo
                cards.forEach(card => card.style.display = "flex");
            } else {
                // Caso contrário, ativa a categoria e filtra os cards
                cat.classList.add("active");
                const targetCategory = cat.getAttribute("data-category");
                
                cards.forEach(card => {
                    if (card.getAttribute("data-category") === targetCategory) {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                });
            }
        });
    });
}

// ==========================================================================
// FORMULÁRIO DE NEWSLETTER (Visual apenas)
// ==========================================================================
function initNewsletter() {
    const form = document.getElementById("newsletterForm");
    if(!form) return;
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("🎉 Inscrição realizada com sucesso! Você receberá nossos achadinhos em breve.");
        form.reset();
    });
}
