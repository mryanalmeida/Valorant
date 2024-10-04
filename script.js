// Lista de personagens de Valorant com suas imagens
const characters = [
    { name: 'Brimstone', image: 'img/brimstone.png' },
    { name: 'Phoenix', image: 'img/phoenix.png' },
    { name: 'Sage', image: 'img/sage.png' },
    { name: 'Sova', image: 'img/sova.png' },
    { name: 'Viper', image: 'img/viper.png' },
    { name: 'Cypher', image: 'img/cypher.png' },
    { name: 'Reyna', image: 'img/reyna.png' },
    { name: 'Killjoy', image: 'img/killjoy.png' },
    { name: 'Breach', image: 'img/breach.png' },
    { name: 'Omen', image: 'img/omen.png' },
    { name: 'Jett', image: 'img/jett.png' },
    { name: 'Raze', image: 'img/raze.png' },
    { name: 'Skye', image: 'img/skye.png' },
    { name: 'Yoru', image: 'img/yoru.png' },
    { name: 'Astra', image: 'img/astra.png' },
    { name: 'KAY/O', image: 'img/kayo.png' },
    { name: 'Chamber', image: 'img/chamber.png' },
    { name: 'Neon', image: 'img/neon.png' },
    { name: 'Fade', image: 'img/fade.png' },
    { name: 'Harbor', image: 'img/harbor.png' },
    { name: 'Gekko', image: 'img/gekko.png' },
    { name: 'Deadlock', image: 'img/deadlock.png' },
    { name: 'Iso', image: 'img/iso.png' },
    { name: 'Clove', image: 'img/clove.png' },
    { name: 'Vyse', image: 'img/vyse.png' }
];

let resetTimer;

// Função para mostrar feedback visual
function showFeedback(message) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = message;

    // Mostra o feedback com animação
    feedbackElement.classList.remove('fade-out'); // Remove a classe de fade-out
    feedbackElement.style.display = 'block'; // Garante que o feedback esteja visível

    // Adiciona uma leve animação de aparição
    feedbackElement.style.opacity = '1';
    feedbackElement.style.transform = 'translate(-50%, -50%)';

    // Remove a mensagem após alguns segundos
    setTimeout(() => {
        feedbackElement.classList.add('fade-out'); // Adiciona a classe para desvanecer
        setTimeout(() => {
            feedbackElement.style.display = 'none'; // Oculta o elemento após a animação de desvanecer
        }, 500); // Tempo para esperar a animação de desvanecer
    }, 3000); // Duração da mensagem visível
}

// Função para resetar a seleção
function resetSelection() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`character-name${i}`).textContent = ""; // Limpa o nome do personagem
        document.getElementById(`hologram${i}`).style.backgroundImage = ""; // Limpa a imagem
    }
}

// Lógica para selecionar todos os personagens
document.getElementById('select-all-btn').addEventListener('click', function () {
    const selectedIndices = new Set(); // Para evitar duplicatas

    for (let i = 0; i < 5; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * characters.length);
        } while (selectedIndices.has(randomIndex)); // Evita duplicatas

        selectedIndices.add(randomIndex);

        // Atualiza o nome e a imagem do personagem
        document.getElementById(`character-name${i + 1}`).textContent = characters[randomIndex].name;
        document.getElementById(`hologram${i + 1}`).style.backgroundImage = `url(${characters[randomIndex].image})`;
    }

    // Reinicia o timer de reset
    resetTimer = setTimeout(resetSelection, 120000); // 2 minutos

    // Exibir feedback
    showFeedback("Personagens selecionados!");
});

// Lógica para resetar a seleção
document.getElementById('reset-btn').addEventListener('click', function () {
    resetSelection(); // Reseta a seleção imediatamente
    clearTimeout(resetTimer); // Limpa o timer

    // Exibir feedback
    showFeedback("Seleção resetada!");
});

// Inicia o timer ao carregar a página
resetTimer = setTimeout(resetSelection, 120000); // 2 minutos
