// Конфигурация раздела "Животные"
const ANIMALS_CONFIG = {
    items: {
        'cat': { price: 10, emoji: '🐈', name: 'Кот' },
        'pig': { price: 9, emoji: '🐖', name: 'Поросёнок' },
        'horse': { price: 8, emoji: '🐎', name: 'Лошадь' },
        'tiger': { price: 7, emoji: '🐅', name: 'Тигр' },
        'elephant': { price: 6, emoji: '🐘', name: 'Слон' },
        'whale': { price: 5, emoji: '🐳', name: 'Кит' }
    },
    colors: [
        { id: 1, name: 'Красный', color: '#FF6B6B', category: 'Голоса' },
        { id: 2, name: 'Синий', color: '#4169E1', category: 'Малыши' },
        { id: 3, name: 'Зеленый', color: '#32CD32', category: 'Питомцы' },
        { id: 4, name: 'Фиолетовый', color: '#8A2BE2', category: 'Птицы' },
        { id: 5, name: 'Желтый', color: '#FFD700', category: 'Насекомые' },
        { id: 6, name: 'Оранжевый', color: '#FF8C00', category: 'Рыбы' },
        { id: 7, name: 'Голубой', color: '#87CEEB', category: 'Хищники' },
        { id: 8, name: 'Розовый', color: '#FF69B4', category: 'Рекордсмены' }
    ],
    letters: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж']
};

// Все вопросы для раздела "Животные"
const ANIMALS_QUESTIONS = {
    // Голоса (Красный) - 10 вопросов
    1: [
        {
            question: "Как «разговаривает» корова?",
            answers: ["Хрюкает", "Мычит", "Блеет", "Токует"],
            correct: 1
        },
        {
            question: "Какой звук издает свинья?",
            answers: ["Кукарекает", "Хрюкает", "Ржет", "Шипит"],
            correct: 1
        },
        {
            question: "Как «поет» петух по утрам?",
            answers: ["Гогочет", "Кукарекает", "Крякает", "Каркает"],
            correct: 1
        },
        {
            question: "Какой звук издает овца?",
            answers: ["Блеет", "Ржет", "Лает", "Мычит"],
            correct: 0
        },
        {
            question: "Как «разговаривает» утка?",
            answers: ["Гогочет", "Крякает", "Кудахчет", "Свистит"],
            correct: 1
        },
        {
            question: "Как подает голос сова?",
            answers: ["Стрекочет", "Каркает", "Ухает", "Щебечет"],
            correct: 2
        },
        {
            question: "Какой звук издает лошадь?",
            answers: ["Хрюкает", "Ржет", "Мычит", "Ревёт"],
            correct: 1
        },
        {
            question: "Как «разговаривает» гусь?",
            answers: ["Квакает", "Гогочет", "Кукарекает", "Свистит"],
            correct: 1
        },
        {
            question: "Какой звук издает ворона?",
            answers: ["Чирикает", "Каркает", "Щебечет", "Ухает"],
            correct: 1
        },
        {
            question: "Кто мяукает?",
            answers: ["Собака", "Корова", "Кошка", "Коза"],
            correct: 2
        }
    ],

    // Малыши (Синий) - 10 вопросов
    2: [
        {
            question: "Как называется детеныш коровы?",
            answers: ["Ягненок", "Теленок", "Жеребенок", "Козленок"],
            correct: 1
        },
        {
            question: "Как называют малыша овцы?",
            answers: ["Котенок", "Поросенок", "Ягненок", "Щенок"],
            correct: 2
        },
        {
            question: "Кто такой жеребенок?",
            answers: ["Детеныш свиньи", "Детеныш коровы", "Детеныш козы", "Детеныш лошади"],
            correct: 3
        },
        {
            question: "Как зовут малыша кошки?",
            answers: ["Щенок", "Котенок", "Львенок", "Медвежонок"],
            correct: 1
        },
        {
            question: "Кто такой волчонок?",
            answers: ["Детеныш лисы", "Детеныш волка", "Детеныш тигра", "Детеныш медведя"],
            correct: 1
        },
        {
            question: "Как называется детеныш собаки?",
            answers: ["Тигренок", "Котенок", "Щенок", "Барсучонок"],
            correct: 2
        },
        {
            question: "Кто такой слоненок?",
            answers: ["Детеныш бегемота", "Детеныш носорога", "Детеныш жирафа", "Детеныш слона"],
            correct: 3
        },
        {
            question: "Как называют малыша свиньи?",
            answers: ["Ягненок", "Поросенок", "Теленок", "Козленок"],
            correct: 1
        },
        {
            question: "Кто такой медвежонок?",
            answers: ["Детеныш зайца", "Детеныш ежа", "Детеныш лисы", "Детеныш медведя"],
            correct: 3
        },
        {
            question: "Как зовут детеныша козы?",
            answers: ["Козленок", "Теленок", "Жеребенок", "Ягненок"],
            correct: 0
        }
    ],

    // Питомцы (Зеленый) - 10 вопросов
    3: [
        {
            question: "Кто из этих животных живет в аквариуме?",
            answers: ["Хомяк", "Черепаха", "Попугай", "Рыбка"],
            correct: 3
        },
        {
            question: "Какое животное дает нам молоко?",
            answers: ["Собака", "Курица", "Корова", "Кошка"],
            correct: 2
        },
        {
            question: "Кто из питомцев любит грызть семечки и крутить колесо?",
            answers: ["Кролик", "Хомяк", "Рыбка", "Улитка"],
            correct: 1
        },
        {
            question: "Какое животное несет яйца, которые мы едим на завтрак?",
            answers: ["Утка", "Индейка", "Гусь", "Курица"],
            correct: 3
        },
        {
            question: "Кто из этих животных является верным другом человека?",
            answers: ["Кошка", "Собака", "Коза", "Овца"],
            correct: 1
        },
        {
            question: "Какого питомца нужно выгуливать на поводке?",
            answers: ["Хомяка", "Кота", "Собаку", "Рыбку"],
            correct: 2
        },
        {
            question: "Кто из этих животных дает нам шерсть для теплых вещей?",
            answers: ["Свинья", "Корова", "Овца", "Курица"],
            correct: 2
        },
        {
            question: "Какой питомец любит точить когти?",
            answers: ["Собака", "Попугай", "Кошка", "Черепаха"],
            correct: 2
        },
        {
            question: "Кто из животных живет в клетке и может повторять слова?",
            answers: ["Хомяк", "Волнистый попугай", "Кролик", "Морская свинка"],
            correct: 1
        },
        {
            question: "Какое животное пасется на лугу и дает нам молоко для сыра?",
            answers: ["Курица", "Коза", "Свинья", "Утка"],
            correct: 1
        }
    ],

    // Птицы (Фиолетовый) - 10 вопросов
    4: [
        {
            question: "Какая птица умеет подражать человеческой речи?",
            answers: ["Ворона", "Попугай", "Сорока", "Воробей"],
            correct: 1
        },
        {
            question: "Какая птица не умеет летать, но отлично плавает?",
            answers: ["Страус", "Пингвин", "Аист", "Утка"],
            correct: 1
        },
        {
            question: "Кто из этих птиц является символом мира?",
            answers: ["Орел", "Сова", "Голубь", "Журавль"],
            correct: 2
        },
        {
            question: "Какая птица выводит птенцов зимой?",
            answers: ["Ласточка", "Снегирь", "Клест", "Синица"],
            correct: 2
        },
        {
            question: "Какая птица самая большая в мире?",
            answers: ["Орёл", "Страус", "Альбатрос", "Журавль"],
            correct: 1
        },
        {
            question: "У какой птицы самый длинный клюв?",
            answers: ["У дятла", "У пеликана", "У колибри", "У фламинго"],
            correct: 1
        },
        {
            question: "Какая птица умеет долбить дерево клювом?",
            answers: ["Сорока", "Дятел", "Ворона", "Сова"],
            correct: 1
        },
        {
            question: "Какая маленькая птичка умеет летать задом наперед?",
            answers: ["Воробей", "Колибри", "Синица", "Ласточка"],
            correct: 1
        },
        {
            question: "Какая птица приносит младенцев, по легенде?",
            answers: ["Кукушка", "Сорока", "Аист", "Фламинго"],
            correct: 2
        },
        {
            question: "Какая птица подбрасывает свои яйца в гнезда других птиц?",
            answers: ["Кукушка", "Сорока", "Ворона", "Сова"],
            correct: 0
        }
    ],

    // Насекомые (Желтый) - 10 вопросов
    5: [
        {
            question: "Какое насекомое собирает нектар и делает мед?",
            answers: ["Оса", "Шмель", "Пчела", "Бабочка"],
            correct: 2
        },
        {
            question: "Кто из насекомых светится в темноте?",
            answers: ["Кузнечик", "Светлячок", "Бабочка-огневка", "Паук-светляк"],
            correct: 1
        },
        {
            question: "Какое насекомое является санитаром леса?",
            answers: ["Муравей", "Муха", "Жук-навозник", "Жук-олень"],
            correct: 0
        },
        {
            question: "Какое насекомое может поднять вес, во много раз превышающий его собственный?",
            answers: ["Бабочка", "Муравей", "Комар", "Стрекоза"],
            correct: 1
        },
        {
            question: "Кто из этих насекомых является прекрасным прыгуном?",
            answers: ["Таракан", "Кузнечик", "Пчела", "Гусеница"],
            correct: 1
        },
        {
            question: "Какое насекомое «кусает» нас, оставляя зудящий красный волдырь?",
            answers: ["Муха", "Пчела", "Комар", "Оса"],
            correct: 2
        },
        {
            question: "Какое насекомое имеет большие красивые крылья с узором?",
            answers: ["Муха", "Бабочка", "Таракан", "Кузнечик"],
            correct: 1
        },
        {
            question: "Кто из этих насекомых плетет паутину?",
            answers: ["Муравей", "Паук", "Гусеница", "Жук"],
            correct: 1
        },
        {
            question: "Какое насекомое издает стрекочущий звук?",
            answers: ["Сверчок", "Комар", "Пчела", "Муха"],
            correct: 0
        },
        {
            question: "Личинкой какого насекомого является гусеница?",
            answers: ["Мухи", "Стрекозы", "Бабочки", "Жука"],
            correct: 2
        }
    ],

    // Рыбы (Оранжевый) - 10 вопросов
    6: [
        {
            question: "Какая рыба носит на носу длинный острый «меч»?",
            answers: ["Рыба-пила", "Рыба-молот", "Рыба-меч", "Рыба-игла"],
            correct: 2
        },
        {
            question: "Какая рыба умеет летать, выпрыгивая из воды?",
            answers: ["Летучая рыба", "Прыгающая рыба", "Воздушная рыба", "Парящая рыба"],
            correct: 0
        },
        {
            question: "Какая рыба является самой большой в мире?",
            answers: ["Синий кит", "Кашалот", "Китовая акула", "Гигантский скат"],
            correct: 2
        },
        {
            question: "Какая рыба имеет форму шара с колючками?",
            answers: ["Морской конек", "Рыба-ёж", "Рыба-шар", "Рыба-клоун"],
            correct: 1
        },
        {
            question: "Какая маленькая яркая рыбка живет среди ядовитых щупалец актинии?",
            answers: ["Рыба-попугай", "Рыба-клоун", "Рыба-бабочка", "Рыба-ангел"],
            correct: 1
        },
        {
            question: "Какая рыба вьет гнездо для своих мальков?",
            answers: ["Карп", "Щука", "Окунь", "Колюшка"],
            correct: 3
        },
        {
            question: "Какая рыба может менять свой цвет, чтобы спрятаться?",
            answers: ["Камбала", "Сельдь", "Скумбрия", "Треска"],
            correct: 0
        },
        {
            question: "Кто из этих обитателей моря не является рыбой?",
            answers: ["Акула", "Дельфин", "Скат", "Сельдь"],
            correct: 1
        },
        {
            question: "Какая рыба известна своей опасностью и острыми зубами?",
            answers: ["Рыба-попугай", "Акула", "Сельдь", "Камбала"],
            correct: 1
        },
        {
            question: "Какая пресноводная рыба имеет усы?",
            answers: ["Окунь", "Щука", "Сом", "Карась"],
            correct: 2
        }
    ],

    // Хищники (Голубой) - 10 вопросов
    7: [
        {
            question: "Какое животное называют «царем зверей»?",
            answers: ["Тигр", "Медведь", "Лев", "Волк"],
            correct: 2
        },
        {
            question: "Кто из этих хищников является самым крупным медведем?",
            answers: ["Бурый медведь", "Белый медведь", "Гималайский медведь", "Гризли"],
            correct: 1
        },
        {
            question: "Какая большая кошка живет в Америке и умеет хорошо лазить по деревьям?",
            answers: ["Леопард", "Пума", "Ягуар", "Тигр"],
            correct: 1
        },
        {
            question: "Кто из этих хищников охотится стаей?",
            answers: ["Рысь", "Гепард", "Леопард", "Волк"],
            correct: 3
        },
        {
            question: "Какое животное является самым быстрым сухопутным хищником?",
            answers: ["Лев", "Гепард", "Гиена", "Волк"],
            correct: 1
        },
        {
            question: "Кто из этих хищников хорошо плавает и питается рыбой?",
            answers: ["Койот", "Рысь", "Выдра", "Шакал"],
            correct: 2
        },
        {
            question: "Какая большая кошка имеет полосатую шкуру?",
            answers: ["Леопард", "Лев", "Тигр", "Пума"],
            correct: 2
        },
        {
            question: "Кто из этих хищников питается в основном падалью?",
            answers: ["Гепард", "Гиена", "Волк", "Рысь"],
            correct: 1
        },
        {
            question: "Какой хищный зверь живет в норе?",
            answers: ["Лиса", "Тигр", "Медведь", "Рысь"],
            correct: 0
        },
        {
            question: "Кто из этих хищников является рептилией?",
            answers: ["Бегемот", "Крокодил", "Носорог", "Кабан"],
            correct: 1
        }
    ],

    // Рекордсмены (Розовый) - 10 вопросов
    8: [
        {
            question: "Какое животное является самым высоким на Земле?",
            answers: ["Слон", "Жираф", "Верблюд", "Страус"],
            correct: 1
        },
        {
            question: "Какое животное самое быстрое на суше?",
            answers: ["Лев", "Антилопа", "Гепард", "Заяц"],
            correct: 2
        },
        {
            question: "Какое млекопитающее умеет летать?",
            answers: ["Калибри", "Летучая мышь", "Тушканчик", "Калан"],
            correct: 1
        },
        {
            question: "Какое животное самое громкое?",
            answers: ["Лев", "Слон", "Синий кит", "Обезьяна-ревун"],
            correct: 2
        },
        {
            question: "Какое животное самое тяжелое на суше?",
            answers: ["Бегемот", "Носорог", "Слон", "Жираф"],
            correct: 2
        },
        {
            question: "Какая птица откладывает самые большие яйца?",
            answers: ["Императорский пингвин", "Альбатрос", "Страус", "Эму"],
            correct: 2
        },
        {
            question: "Какое животное дольше всех спит (около 20 часов в сутки)?",
            answers: ["Ленивец", "Кошка", "Летучая мышь", "Белка"],
            correct: 0
        },
        {
            question: "Какое животное имеет самый длинный язык (относительно тела)?",
            answers: ["Муравьед", "Жираф", "Дятел", "Хамелеон"],
            correct: 0
        },
        {
            question: "Какое животное считается самым умным после человека?",
            answers: ["Слон", "Обезьяна", "Дельфин", "Собака"],
            correct: 2
        },
        {
            question: "Какое животное может поворачивать голову почти на 360 градусов?",
            answers: ["Волк", "Сова", "Лошадь", "Кошка"],
            correct: 1
        }
    ]
};

// Индекс текущего вопроса для каждой категории
let currentQuestionIndex = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
};

// Состояние игры
let gameState = {
    players: [],
    currentPlayerIndex: 0,
    selectedCell: null,
    selectedCard: null,
    selectedAnswer: null,
    currentQuestion: null,
    gameStarted: false,
    startTime: null,
    questionsAnswered: 0,
    targetCell: null
};

// Инициализация игры
document.addEventListener('DOMContentLoaded', function() {
    console.log("🐾 Животные игра загружается...");
    loadPlayersFromMain();
    createGameBoard();
    createColorCards();
    createShopItems();
    updatePlayersDisplay();
    createConfetti();
    
    // Начинаем первый ход
    startNewTurn();
    
    // Настройка обработчиков событий
    setupEventListeners();
    
    // Запускаем время игры
    if (!gameState.startTime) {
        gameState.startTime = new Date();
    }
    
    console.log("✅ Животные игра готова!");
});

// Загрузка игроков с главной страницы
function loadPlayersFromMain() {
    const savedPlayers = localStorage.getItem('gamePlayers');
    if (savedPlayers) {
        gameState.players = JSON.parse(savedPlayers);
        // Добавляем items для каждого игрока
        gameState.players.forEach(player => {
            if (!player.items) {
                player.items = { 
                    'cat': 0, 
                    'pig': 0, 
                    'horse': 0, 
                    'tiger': 0, 
                    'elephant': 0, 
                    'whale': 0 
                };
            }
        });
        console.log("👥 Игроки загружены:", gameState.players);
    } else {
        // Если игроки не найдены, создаем демо-игроков
        gameState.players = [
            {
                name: 'Игрок 1',
                color: '#FF6B6B',
                coins: 0,
                items: { 
                    'cat': 0, 
                    'pig': 0, 
                    'horse': 0, 
                    'tiger': 0, 
                    'elephant': 0, 
                    'whale': 0 
                }
            },
            {
                name: 'Игрок 2', 
                color: '#4ECDC4',
                coins: 0,
                items: { 
                    'cat': 0, 
                    'pig': 0, 
                    'horse': 0, 
                    'tiger': 0, 
                    'elephant': 0, 
                    'whale': 0 
                }
            }
        ];
        console.log("👥 Созданы демо-игроки");
    }
}

// Создание игровой доски
function createGameBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';

    // Матрица расстановки цветов по принципу судоку
    const colorLayout = [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [2, 3, 4, 5, 6, 7, 8, 1],
        [3, 4, 5, 6, 7, 8, 1, 2],
        [4, 5, 6, 7, 8, 1, 2, 3],
        [5, 6, 7, 8, 1, 2, 3, 4],
        [6, 7, 8, 1, 2, 3, 4, 5],
        [7, 8, 1, 2, 3, 4, 5, 6],
        [8, 1, 2, 3, 4, 5, 6, 7]
    ];

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            const colorId = colorLayout[row][col];
            cell.dataset.color = colorId;
            cell.dataset.name = ANIMALS_CONFIG.letters[col] + (8 - row);
            
            const label = document.createElement('div');
            label.className = 'cell-label';
            label.textContent = cell.dataset.name;
            
            cell.appendChild(label);
            cell.addEventListener('click', () => {
                console.log("🎯 Нажата клетка:", cell.dataset.name);
                handleCellClick(cell);
            });
            
            board.appendChild(cell);
        }
    }
    console.log("✅ Доска создана");
}

// Создание цветных карточек
function createColorCards() {
    const cardsContainer = document.getElementById('color-cards');
    cardsContainer.innerHTML = '';
    
    ANIMALS_CONFIG.colors.forEach(color => {
        const card = document.createElement('div');
        card.className = 'color-card';
        card.style.background = color.color;
        card.dataset.colorId = color.id;
        
        card.innerHTML = `
            <div class="card-content">
                <div class="card-color" style="background: ${color.color}"></div>
                <div class="card-info">
                    <div class="card-name">${color.name}</div>
                    <div class="card-category">${color.category}</div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            console.log("🎨 Нажата карточка:", color.name, "ID:", color.id);
            selectColorCard(card);
        });
        
        cardsContainer.appendChild(card);
    });
    console.log("✅ Карточки созданы");
}

// Создание товаров магазина (отсортировано по цене от дорогих к дешевым)
function createShopItems() {
    const shopContainer = document.getElementById('shop-items');
    shopContainer.innerHTML = '';
    
    // Сортируем товары по цене (от высокой к низкой)
    const sortedItems = Object.entries(ANIMALS_CONFIG.items)
        .sort(([,a], [,b]) => b.price - a.price);
    
    sortedItems.forEach(([item, info]) => {
        const shopItem = document.createElement('div');
        shopItem.className = 'shop-item';
        shopItem.dataset.item = item;
        
        shopItem.innerHTML = `
            <div class="item-icon">${info.emoji}</div>
            <div class="item-name">${info.name}</div>
            <div class="item-price">${info.price} монет</div>
        `;
        
        shopItem.addEventListener('click', () => selectShopItem(shopItem));
        shopContainer.appendChild(shopItem);
    });
    console.log("✅ Магазин создан (отсортирован по цене)");
}

// Настройка обработчиков событий
function setupEventListeners() {
    document.getElementById('buy-button').addEventListener('click', buySelectedItem);
    document.getElementById('confirm-answer').addEventListener('click', checkAnswer);
    console.log("✅ Обработчики событий настроены");
}

// НАЧАЛО НОВОГО ХОДА
function startNewTurn() {
    console.log("🔄 Начинаем новый ход");
    
    // Сбрасываем предыдущие выборы
    gameState.selectedCell = null;
    gameState.selectedCard = null;
    gameState.currentQuestion = null;
    gameState.selectedAnswer = null;
    
    // Снимаем выделение со всех клеток и карточек
    document.querySelectorAll('.cell').forEach(c => {
        c.classList.remove('active');
    });
    document.querySelectorAll('.color-card').forEach(c => c.classList.remove('selected'));
    
    // Обновляем инструкции
    updateInstructions(1);
    
    // Компьютер выбирает случайное поле
    const randomRow = Math.floor(Math.random() * 8);
    const randomCol = Math.floor(Math.random() * 8);
    const targetCellName = ANIMALS_CONFIG.letters[randomCol] + (8 - randomRow);
    
    gameState.targetCell = document.querySelector(`.cell[data-name="${targetCellName}"]`);
    
    if (gameState.targetCell) {
        // Показываем какое поле нужно найти
        showFieldNameLarge(targetCellName);
        updateTaskDisplay(`🎯 Игрок ${gameState.players[gameState.currentPlayerIndex].name}, найди поле: ${targetCellName}`);
        
        showMessage(`🎯 Найди поле: ${targetCellName}`, 'info');
        console.log("🎯 Целевое поле:", targetCellName);
    }
}

// Обновление инструкций
function updateInstructions(step) {
    document.querySelectorAll('.instruction-step').forEach(step => {
        step.classList.remove('active');
    });
    
    const currentStep = document.getElementById(`step-${step}`);
    if (currentStep) {
        currentStep.classList.add('active');
    }
}

// ОБРАБОТКА НАЖАТИЯ НА КЛЕТКУ
function handleCellClick(cell) {
    console.log("📍 Игрок нажал на клетку:", cell.dataset.name);
    
    if (!gameState.targetCell) {
        showMessage('❌ Сначала начни ход!', 'warning');
        return;
    }
    
    if (cell === gameState.targetCell) {
        console.log("✅ Игрок нашел правильную клетку!");
        
        cell.classList.add('active');
        gameState.selectedCell = cell;
        
        placePlayerToken(cell);
        updateCurrentFieldDisplay(cell);
        updateInstructions(2);
        updateTaskDisplay('🎨 Отлично! Теперь выбери цветную карточку, соответствующую цвету твоего поля!');
        
        showMessage('✅ Правильно! Теперь выбери цветную карточку', 'success');
        
    } else {
        console.log("❌ Игрок ошибся клеткой");
        showMessage('❌ Не та клетка! Попробуй ещё раз', 'error');
    }
}

// ВЫБОР ЦВЕТНОЙ КАРТОЧКИ
function selectColorCard(card) {
    console.log("🎨 Выбираем карточку");
    
    if (!gameState.selectedCell) {
        showMessage('❌ Сначала найди правильную клетку на доске!', 'warning');
        return;
    }
    
    document.querySelectorAll('.color-card').forEach(c => {
        c.classList.remove('selected');
    });
    
    card.classList.add('selected');
    gameState.selectedCard = card;
    
    const cellColorId = parseInt(gameState.selectedCell.dataset.color);
    const cardColorId = parseInt(card.dataset.colorId);
    
    console.log("🔍 Сравниваем цвета: клетка", cellColorId, "карточка", cardColorId);
    
    if (cellColorId === cardColorId) {
        console.log("✅ Цвет совпадает! Показываем вопрос...");
        updateInstructions(3);
        showQuestion();
    } else {
        console.log("❌ Цвет не совпадает!");
        showMessage('❌ Ой! Этот цвет не соответствует цвету твоего поля. Попробуй ещё раз!', 'error');
        card.classList.remove('selected');
        gameState.selectedCard = null;
    }
}

// ПОКАЗАТЬ ВОПРОС
function showQuestion() {
    console.log("❓ ПОКАЗАТЬ ВОПРОС");
    
    if (!gameState.selectedCard) {
        console.log("❌ Ошибка: selectedCard не установлен");
        return;
    }

    const colorId = parseInt(gameState.selectedCard.dataset.colorId);
    console.log("🔍 ID цвета карточки:", colorId);
    
    const questions = ANIMALS_QUESTIONS[colorId];
    console.log("🔍 Вопросы для этого цвета:", questions);

    if (!questions || questions.length === 0) {
        console.log("❌ Ошибка: нет вопросов для этого цвета");
        showMessage('Вопросы для этой категории пока не готовы!', 'info');
        return;
    }

    const questionIndex = currentQuestionIndex[colorId];
    gameState.currentQuestion = questions[questionIndex];
    
    currentQuestionIndex[colorId] = (questionIndex + 1) % questions.length;
    
    console.log("✅ Выбран вопрос:", questionIndex, gameState.currentQuestion);

    showQuestionModal();
}

// ПОКАЗАТЬ МОДАЛЬНОЕ ОКНО С ВОПРОСОМ
function showQuestionModal() {
    console.log("🪟 Открываем модальное окно с вопросом");
    
    const colorId = parseInt(gameState.selectedCard.dataset.colorId);
    const colorInfo = ANIMALS_CONFIG.colors.find(c => c.id === colorId);
    
    document.getElementById('question-category').textContent = `🐾 ${colorInfo.category}`;
    document.getElementById('category-badge').textContent = colorInfo.name;
    document.getElementById('question-text').textContent = gameState.currentQuestion.question;
    
    const answersGrid = document.getElementById('answers-grid');
    answersGrid.innerHTML = '';
    
    gameState.currentQuestion.answers.forEach((answer, index) => {
        const answerOption = document.createElement('div');
        answerOption.className = 'answer-option';
        answerOption.textContent = answer;
        answerOption.dataset.index = index;
        
        answerOption.addEventListener('click', () => {
            console.log("📝 Выбран ответ:", index);
            selectAnswer(answerOption);
        });
        
        answersGrid.appendChild(answerOption);
    });
    
    document.getElementById('confirm-answer').disabled = true;
    document.getElementById('question-modal').classList.add('active');
    
    console.log("✅ Модальное окно открыто");
}

// Показ названия поля крупно
function showFieldNameLarge(fieldName) {
    const fieldDisplay = document.getElementById('current-field-display');
    fieldDisplay.innerHTML = `<div class="field-name-large">${fieldName}</div>`;
}

// ПОСТАНОВКА ФИШКИ НА КЛЕТКУ
function placePlayerToken(cell) {
    console.log("🎯 Ставим фишку на клетку:", cell.dataset.name);
    
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    
    let token = document.getElementById('player-token');
    if (!token) {
        token = document.createElement('div');
        token.id = 'player-token';
        token.className = 'player-token';
        document.querySelector('.game-board-container').appendChild(token);
    }
    
    token.style.background = currentPlayer.color;
    token.style.display = 'block';
    
    const cellRect = cell.getBoundingClientRect();
    const boardRect = document.querySelector('.game-board-container').getBoundingClientRect();
    
    const cellSize = cellRect.width;
    const tokenSize = 45;
    const offsetX = (cellSize - tokenSize) / 2;
    const offsetY = (cellSize - tokenSize) / 2;
    
    const x = cellRect.left - boardRect.left + offsetX;
    const y = cellRect.top - boardRect.top + offsetY;
    
    token.style.left = '0';
    token.style.top = '0';
    token.style.transform = `translate(${x}px, ${y}px)`;
    token.style.animation = 'token-appear 0.6s ease';
    
    console.log("✅ Фишка поставлена на позицию:", x, y);
}

// Обновление отображения текущего поля
function updateCurrentFieldDisplay(cell) {
    const fieldContainer = document.getElementById('current-field');
    const colorId = parseInt(cell.dataset.color);
    const colorInfo = ANIMALS_CONFIG.colors.find(c => c.id === colorId);
    
    if (colorInfo) {
        fieldContainer.innerHTML = `
            <div class="field-card">
                <div class="field-icon">🎯</div>
                <div class="field-info">
                    <div class="field-name">${cell.dataset.name}</div>
                    <div class="field-category">${colorInfo.name} - ${colorInfo.category}</div>
                </div>
            </div>
        `;
    }
}

// Выбор ответа
function selectAnswer(answerOption) {
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    answerOption.classList.add('selected');
    gameState.selectedAnswer = parseInt(answerOption.dataset.index);
    document.getElementById('confirm-answer').disabled = false;
}

// Проверка ответа
function checkAnswer() {
    if (gameState.selectedAnswer === null) return;
    
    const isCorrect = gameState.selectedAnswer === gameState.currentQuestion.correct;
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    
    closeQuestionModal();
    showResultModal(isCorrect);
    
    if (isCorrect) {
        currentPlayer.coins += 1;
        gameState.questionsAnswered++;
        showMessage('✅ Правильно! +1 монета', 'success');
    } else {
        showMessage('❌ Неправильно! Попробуй ещё раз в следующий ход', 'error');
    }
    
    updatePlayersDisplay();
    setTimeout(nextPlayer, 2000);
}

// Показать окно результата
function showResultModal(isCorrect) {
    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const playerAnswer = document.getElementById('player-answer');
    const correctAnswer = document.getElementById('correct-answer');
    const coinsEarned = document.getElementById('coins-earned');
    
    if (isCorrect) {
        resultIcon.textContent = '🎉';
        resultTitle.textContent = 'Правильно!';
        resultTitle.style.color = '#06D6A0';
        playerAnswer.style.color = '#06D6A0';
        coinsEarned.textContent = '1';
    } else {
        resultIcon.textContent = '💡';
        resultTitle.textContent = 'Неправильно';
        resultTitle.style.color = '#FF6B6B';
        playerAnswer.style.color = '#FF6B6B';
        coinsEarned.textContent = '0';
    }
    
    playerAnswer.textContent = gameState.currentQuestion.answers[gameState.selectedAnswer];
    correctAnswer.textContent = `Правильный ответ: ${gameState.currentQuestion.answers[gameState.currentQuestion.correct]}`;
    
    document.getElementById('result-modal').classList.add('active');
}

// Переход к следующему игроку
function nextPlayer() {
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    updatePlayersDisplay();
    startNewTurn();
}

// Обновление отображения игроков
function updatePlayersDisplay() {
    const playersList = document.getElementById('players-list');
    const currentPlayerDisplay = document.getElementById('current-player');
    const playerCoinsDisplay = document.getElementById('player-coins');
    
    playersList.innerHTML = '';
    
    gameState.players.forEach((player, index) => {
        const playerItem = document.createElement('div');
        playerItem.className = `player-item ${index === gameState.currentPlayerIndex ? 'active' : ''}`;
        
        const itemsCount = Object.values(player.items).reduce((sum, count) => sum + count, 0);
        const itemsDisplay = Object.entries(player.items)
            .filter(([_, count]) => count > 0)
            .map(([item, _]) => ANIMALS_CONFIG.items[item].emoji)
            .join('');
        
        playerItem.innerHTML = `
            <div class="player-avatar" style="background: ${player.color}"></div>
            <div class="player-details">
                <div class="player-name">${player.name}</div>
                <div class="player-stats">
                    <span>💰 ${player.coins} монет</span>
                    <span>🎯 ${itemsCount}/6 призов</span>
                </div>
            </div>
            <div class="player-pieces">${itemsDisplay}</div>
        `;
        
        playersList.appendChild(playerItem);
    });
    
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    currentPlayerDisplay.textContent = currentPlayer.name;
    currentPlayerDisplay.style.color = currentPlayer.color;
    playerCoinsDisplay.textContent = currentPlayer.coins;
}

// Обновление отображения задания
function updateTaskDisplay(message) {
    document.getElementById('task-content').innerHTML = `<p>${message}</p>`;
}

// Выбор товара в магазине
function selectShopItem(item) {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const itemType = item.dataset.item;
    
    if (currentPlayer.items[itemType] > 0) {
        showMessage('Ты уже купил этот приз!', 'warning');
        return;
    }
    
    document.querySelectorAll('.shop-item').forEach(i => {
        i.classList.remove('selected');
    });
    
    item.classList.add('selected');
    document.getElementById('buy-button').disabled = false;
}

// Покупка выбранного товара
function buySelectedItem() {
    const selectedItem = document.querySelector('.shop-item.selected');
    if (!selectedItem) {
        showMessage('Сначала выбери приз для покупки!', 'warning');
        return;
    }
    
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const itemType = selectedItem.dataset.item;
    const itemInfo = ANIMALS_CONFIG.items[itemType];
    
    if (currentPlayer.coins < itemInfo.price) {
        showMessage(`❌ Недостаточно монет! Нужно ${itemInfo.price} монет.`, 'error');
        return;
    }
    
    if (currentPlayer.items[itemType] > 0) {
        showMessage('Ты уже купил этот приз!', 'warning');
        return;
    }
    
    currentPlayer.coins -= itemInfo.price;
    currentPlayer.items[itemType] = 1;
    
    showMessage(`🎉 Поздравляем! Ты купил ${itemInfo.name} за ${itemInfo.price} монет!`, 'success');
    
    updatePlayersDisplay();
    selectedItem.classList.add('bought');
    selectedItem.classList.remove('selected');
    document.getElementById('buy-button').disabled = true;
    
    checkWinCondition();
}

// Проверка условия победы
function checkWinCondition() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const itemsCount = Object.values(currentPlayer.items).reduce((sum, count) => sum + count, 0);
    
    if (itemsCount === 6) {
        setTimeout(() => showWinModal(currentPlayer), 1000);
    }
}

// Показать окно победы
function showWinModal(winner) {
    const winnerName = document.getElementById('winner-name');
    const gameTime = document.getElementById('game-time');
    const totalCoins = document.getElementById('total-coins');
    const totalQuestions = document.getElementById('total-questions');
    
    winnerName.textContent = winner.name;
    winnerName.style.color = winner.color;
    
    const endTime = new Date();
    const timeDiff = Math.floor((endTime - gameState.startTime) / 1000);
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;
    gameTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const allCoins = gameState.players.reduce((sum, player) => sum + player.coins, 0);
    totalCoins.textContent = allCoins;
    
    totalQuestions.textContent = gameState.questionsAnswered;
    
    document.getElementById('win-modal').classList.add('active');
    createConfetti(true);
}

// Новая игра
function startNewGame() {
    if (confirm('Начать новую игру? Текущий прогресс будет потерян.')) {
        gameState.players.forEach(player => {
            player.coins = 0;
            player.items = { 
                'cat': 0, 
                'pig': 0, 
                'horse': 0, 
                'tiger': 0, 
                'elephant': 0, 
                'whale': 0 
            };
        });
        gameState.currentPlayerIndex = 0;
        gameState.questionsAnswered = 0;
        gameState.startTime = new Date();
        gameState.targetCell = null;
        
        Object.keys(currentQuestionIndex).forEach(key => {
            currentQuestionIndex[key] = 0;
        });
        
        const token = document.getElementById('player-token');
        if (token) {
            token.remove();
        }
        
        document.querySelectorAll('.shop-item').forEach(item => {
            item.classList.remove('bought');
        });
        
        updatePlayersDisplay();
        startNewTurn();
        
        showMessage('🔄 Начата новая игра!', 'success');
    }
}

// Закрытие модальных окон
function closeQuestionModal() {
    document.getElementById('question-modal').classList.remove('active');
}

function closeResultModal() {
    document.getElementById('result-modal').classList.remove('active');
}

// Создание конфетти
function createConfetti(isWin = false) {
    const container = document.querySelector('.confetti-container');
    container.innerHTML = '';
    
    const colors = ['#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#118AB2', '#7209B7', '#F72585'];
    const count = isWin ? 200 : 50;
    
    for (let i = 0; i < count; i++) {
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

// Показать сообщение
function showMessage(text, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = text;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.background = '#06D6A0';
    } else if (type === 'error') {
        notification.style.background = '#FF6B6B';
    } else if (type === 'warning') {
        notification.style.background = '#FFD166';
        notification.style.color = '#2C3E50';
    } else {
        notification.style.background = '#118AB2';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Навигация
function goBack() {
    if (confirm('Вернуться к выбору раздела?')) {
        window.location.href = 'index.html';
    }
}

function playAgain() {
    startNewGame();
    document.getElementById('win-modal').classList.remove('active');
}

function goToMenu() {
    window.location.href = 'index.html';
}

// Добавляем CSS для уведомлений
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(notificationStyles);