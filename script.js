// Конфигурация игры
const CONFIG = {
    colors: [
        '#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', 
        '#118AB2', '#7209B7', '#F72585', '#9C27B0'
    ],
    categories: {
        'chess': { name: '🎯 Шахматное Королевство', icon: '♛' },
        'math': { name: '🔢 Математическая Вселенная', icon: 'π' },
        'russian': { name: '📚 Великий Русский Язык', icon: 'А' },
        'fairy-tales': { name: '🦄 Мир Волшебных Сказок', icon: '✨' },
        'logic': { name: '🎲 Лабиринты Логики', icon: '⊛' },
        'sports': { name: '🏃‍♂️ Спорт и Здоровье', icon: '⚽' },
        'animals': { name: '🦁 Царство Животных', icon: '🐾' },
        'emotions': { name: '🌈 Мир Эмоций', icon: '😊' },
        'time': { name: '⏰ Путешествие во Времени', icon: '🕒' },
        'behavior': { name: '🎓 Школа Вежливости', icon: '✓' }
    }
};

// Состояние игры
let gameState = {
    selectedCategory: null,
    playerCount: 2,
    players: []
};

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initializePlayers();
    updateSelectedCategoryDisplay();
    createConfetti();
    playWelcomeSound();
});

// Создание конфетти
function createConfetti() {
    const container = document.querySelector('.confetti-container');
    const colors = ['#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#118AB2', '#7209B7'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        container.appendChild(confetti);
    }
}

// Звук приветствия (эмулируем)
function playWelcomeSound() {
    // В реальной реализации здесь будет воспроизведение звука
    console.log('🎵 Добро пожаловать в Игру Знаний!');
}

// Выбор категории
function selectCategory(card) {
    // Снимаем выделение со всех карточек
    document.querySelectorAll('.category-card').forEach(c => {
        c.classList.remove('selected');
    });
    
    // Выделяем выбранную карточку
    card.classList.add('selected');
    gameState.selectedCategory = card.dataset.category;
    
    // Анимация выбора
    card.style.animation = 'bounce 0.5s ease';
    setTimeout(() => {
        card.style.animation = '';
    }, 500);
    
    updateSelectedCategoryDisplay();
    updateStartButton();
    
    // Воспроизводим звук выбора
    playSelectSound();
}

function playSelectSound() {
    // Эмуляция звука выбора
    console.log('🔊 Звук выбора категории');
}

function updateSelectedCategoryDisplay() {
    const display = document.getElementById('selected-category');
    
    if (gameState.selectedCategory) {
        const category = CONFIG.categories[gameState.selectedCategory];
        display.innerHTML = `
            <span class="category-preview">${category.icon}</span>
            <span class="category-text">${category.name}</span>
        `;
        display.style.background = 'linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(77, 205, 196, 0.2))';
    } else {
        display.innerHTML = `
            <span class="category-preview">🎯</span>
            <span class="category-text">Выбери мир приключений!</span>
        `;
        display.style.background = 'rgba(255, 215, 102, 0.1)';
    }
}

// Управление количеством игроков
function changePlayerCount(delta) {
    let newCount = gameState.playerCount + delta;
    
    if (newCount >= 1 && newCount <= 6) {
        gameState.playerCount = newCount;
        document.getElementById('player-count').textContent = newCount;
        document.getElementById('player-count').style.animation = 'pulse 0.3s ease';
        setTimeout(() => {
            document.getElementById('player-count').style.animation = '';
        }, 300);
        
        initializePlayers();
        updateStartButton();
        playCountChangeSound();
    }
}

function playCountChangeSound() {
    // Эмуляция звука изменения счётчика
    console.log('🔊 Звук изменения количества игроков');
}

function initializePlayers() {
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = '';
    
    for (let i = 0; i < gameState.playerCount; i++) {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player-input';
        playerDiv.innerHTML = `
            <input type="text" placeholder="Придумай имя..." value="Игрок ${i + 1}" 
                   oninput="updateStartButton()"
                   onfocus="this.select()">
            <div class="color-preview" style="background-color: ${CONFIG.colors[i % CONFIG.colors.length]}" 
                 title="Цвет игрока"></div>
        `;
        playersList.appendChild(playerDiv);
    }
    
    // Анимация появления игроков
    const inputs = playersList.querySelectorAll('.player-input');
    inputs.forEach((input, index) => {
        input.style.animation = `slideIn 0.5s ease ${index * 0.1}s both`;
    });
}

// Обновление состояния кнопки старта
function updateStartButton() {
    const startButton = document.getElementById('start-button');
    const hasCategory = gameState.selectedCategory !== null;
    const hasValidPlayers = validatePlayers();
    
    startButton.disabled = !(hasCategory && hasValidPlayers);
    
    if (!startButton.disabled) {
        startButton.style.animation = 'pulse 2s infinite';
    } else {
        startButton.style.animation = '';
    }
}

function validatePlayers() {
    const inputs = document.querySelectorAll('.player-input input');
    let valid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            valid = false;
        }
    });
    
    return valid;
}

// Запуск игры
function startGame() {
    if (!gameState.selectedCategory) {
        showMessage('Пожалуйста, выбери раздел для игры!', 'warning');
        return;
    }
    
    // Собираем информацию об игроках
    const playerInputs = document.querySelectorAll('.player-input input');
    gameState.players = [];
    
    for (let i = 0; i < playerInputs.length; i++) {
        gameState.players.push({
            name: playerInputs[i].value,
            color: CONFIG.colors[i % CONFIG.colors.length],
            coins: 0,
            pieces: {
                king: 0, queen: 0, rook: 0, bishop: 0, knight: 0, pawn: 0
            }
        });
    }
    
    // Анимация запуска
    const startButton = document.getElementById('start-button');
    startButton.innerHTML = '<span class="button-text">Запускаем...</span><span class="button-sparkles">✨✨✨</span>';
    startButton.style.background = 'linear-gradient(135deg, #06D6A0, #4ECDC4)';
    
    // Сохраняем состояние и переходим к игре
    localStorage.setItem('gameState', JSON.stringify(gameState));
    
    setTimeout(() => {
        // Переход на страницу выбранного раздела
        switch (gameState.selectedCategory) {
            case 'chess':
                window.location.href = 'chess.html';
                break;
            case 'math':
                showMessage('Раздел "Математика" скоро будет доступен!', 'info');
                break;
            case 'russian':
                showMessage('Раздел "Русский язык" скоро будет доступен!', 'info');
                break;
            default:
                showMessage('Этот раздел скоро будет доступен!', 'info');
        }
        
        // Восстанавливаем кнопку
        startButton.innerHTML = '<span class="button-text">Начать Игру!</span><span class="button-sparkles">✨✨✨</span>';
        startButton.style.background = 'linear-gradient(135deg, var(--rainbow-1), var(--rainbow-2), var(--rainbow-3))';
    }, 2000);
}

// Показать сообщение
function showMessage(text, type) {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'warning' ? '#FFD166' : '#4ECDC4'};
        color: white;
        padding: 15px 25px;
        border-radius: 15px;
        box-shadow: var(--shadow-large);
        z-index: 1000;
        font-weight: 700;
        animation: slideInRight 0.5s ease;
    `;
    message.textContent = text;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 500);
    }, 3000);
}

// Анимация при загрузке
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
    
    // Добавляем CSS анимации
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideOutRight {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(100px); }
        }
        
        @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);
});