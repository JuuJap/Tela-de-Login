function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector(".icon");

    // Alterna o tema
    body.classList.toggle("dark-theme");

    // Adiciona animação de rotação
    icon.classList.add("rotate");

    setTimeout(() => {
        // Remove a animação
        icon.classList.remove("rotate");

        // Atualiza o ícone conforme o tema
        const isDark = body.classList.contains("dark-theme");
        icon.textContent = isDark ? "☀️" : "🌙";
    }, 300);
}