// Конфигурация математического раздела
const MATH_CONFIG = {
    items: {
        'tree': { price: 10, emoji: '⏹️', name: 'Квадрат' },
        'book': { price: 9, emoji: '📚', name: 'Прямоугольник' },
        'orange': { price: 5, emoji: '🎯', name: 'Круг' },
        'rubiks': { price: 3, emoji: '🎲', name: 'Куб' },
        'pizza': { price: 3, emoji: '🍕', name: 'Треугольник' },
        'ball': { price: 1, emoji: '⚽', name: 'Шар' }
    },
    colors: [
        { id: 1, name: 'Красный', color: '#FF6B6B', category: 'Вычисления' },
        { id: 2, name: 'Синий', color: '#4169E1', category: 'Задачи' },
        { id: 3, name: 'Зеленый', color: '#32CD32', category: 'Измерения' },
        { id: 4, name: 'Фиолетовый', color: '#8A2BE2', category: 'Сравнения' },
        { id: 5, name: 'Желтый', color: '#FFD700', category: 'Деньги' },
        { id: 6, name: 'Оранжевый', color: '#FF8C00', category: 'Дроби' },
        { id: 7, name: 'Голубой', color: '#87CEEB', category: 'Время' },
        { id: 8, name: 'Розовый', color: '#FF69B4', category: 'Логика' }
    ],
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
};

// Все вопросы для математического раздела
// Все вопросы для математического раздела
const MATH_QUESTIONS = {
    // Весёлый счёт (Красный) - 10 вопросов
    1: [
        {
            question: "Сколько будет 7 + 5?",
            answers: ["11", "12", "13", "10"],
            correct: 1
        },
        {
            question: "Какое число на 3 меньше, чем 15?",
            answers: ["18", "12", "5", "10"],
            correct: 1
        },
        {
            question: "У Маши было 10 яблок, 3 она съела. Сколько яблок осталось?",
            answers: ["13", "10", "7", "6"],
            correct: 2
        },
        {
            question: "Посчитай: 18 - 9 + 2",
            answers: ["9", "10", "11", "7"],
            correct: 2
        },
        {
            question: "Какое число стоит между числами 49 и 51?",
            answers: ["48", "50", "52", "60"],
            correct: 1
        },
        {
            question: "Сколько получится, если к дюжине (12) прибавить 8?",
            answers: ["18", "19", "20", "4"],
            correct: 2
        },
        {
            question: "Я задумал число, вычел из него 6 и получил 4. Какое число я задумал?",
            answers: ["2", "9", "10", "12"],
            correct: 2
        },
        {
            question: "Сравни: что больше, 25 + 15 или 50 - 5?",
            answers: ["25 + 15", "50 - 5", "Они равны", "Нет правильного ответа"],
            correct: 1
        },
        {
            question: "В клетке сидели 5 кроликов. Прибежали ещё столько же. Сколько теперь кроликов?",
            answers: ["5", "7", "10", "15"],
            correct: 2
        },
        {
            question: "Раздели 15 конфет поровну на троих детей. Сколько достанется каждому?",
            answers: ["3", "4", "5", "6"],
            correct: 2
        }
    ],

    // Геометрические фигуры (Синий) - 10 вопросов
    2: [
        {
            question: "У какой фигуры 3 угла и 3 стороны?",
            answers: ["Квадрат", "Прямоугольник", "Треугольник", "Круг"],
            correct: 2
        },
        {
            question: "Как называется фигура, похожая на мячик?",
            answers: ["Куб", "Круг", "Шар", "Овал"],
            correct: 2
        },
        {
            question: "Сколько сторон у квадрата?",
            answers: ["3", "4", "5", "6"],
            correct: 1
        },
        {
            question: "На что похожа дверь или страница книги?",
            answers: ["На треугольник", "На круг", "На прямоугольник", "На овал"],
            correct: 2
        },
        {
            question: "Как называется фигура, у которой все стороны равны, как у шахматной доски?",
            answers: ["Прямоугольник", "Треугольник", "Квадрат", "Ромб"],
            correct: 2
        },
        {
            question: "Что НЕ является геометрической фигурой?",
            answers: ["Круг", "Треугольник", "Пешка", "Квадрат"],
            correct: 2
        },
        {
            question: "Как называется фигура, похожая на яйцо или на вытянутый круг?",
            answers: ["Овал", "Шар", "Квадрат", "Прямоугольник"],
            correct: 0
        },
        {
            question: "У какой фигуры нет углов?",
            answers: ["У квадрата", "У треугольника", "У круга", "У прямоугольника"],
            correct: 2
        },
        {
            question: "Как называется коробка, у которой все стороны — квадраты?",
            answers: ["Шар", "Пирамида", "Куб", "Цилиндр"],
            correct: 2
        },
        {
            question: "Чем круг отличается от шара?",
            answers: [
                "Круг объёмный, а шар — плоский", 
                "Шар можно покатать, а круг — нет", 
                "У круга есть углы", 
                "Они ничем не отличаются"
            ],
            correct: 1
        }
    ],

    // Логические загадки (Зеленый) - 10 вопросов
    3: [
        {
            question: "Два отца и два сына поймали трёх зайцев. Каждому досталось по одному зайцу. Как это возможно?",
            answers: ["Они поделились", "Их было трое: дед, отец и сын", "Один заяц сбежал", "Они поймали ещё одного"],
            correct: 1
        },
        {
            question: "Что легче: 1 кг ваты или 1 кг железа?",
            answers: ["Вата", "Железо", "Одинаково", "Зависит от размера"],
            correct: 2
        },
        {
            question: "Сколько месяцев в году имеют 28 дней?",
            answers: ["1", "2", "6", "Все 12"],
            correct: 3
        },
        {
            question: "Ты обогнал бегуна, который был на втором месте. На каком месте ты теперь?",
            answers: ["На первом", "На втором", "На третьем", "На четвёртом"],
            correct: 1
        },
        {
            question: "Что становится больше, если его перевернуть?",
            answers: ["Число 9", "Число 6", "Слово 'кот'", "Сумма"],
            correct: 0
        },
        {
            question: "Сколько будет 2+2*2?",
            answers: ["4", "8", "6", "10"],
            correct: 2
        },
        {
            question: "Что можно приготовить, но нельзя съесть?",
            answers: ["Кашу", "Уроки", "Компот", "Бутерброд"],
            correct: 1
        },
        {
            question: "Сидят три кошки. Против каждой кошки сидят две кошки. Сколько всего кошек?",
            answers: ["3", "6", "9", "12"],
            correct: 0
        },
        {
            question: "Что бежит без ног?",
            answers: ["Собака", "Человек", "Река", "Птица"],
            correct: 2
        },
        {
            question: "Какое слово всегда пишется неправильно?",
            answers: ["Правильно", "Неправильно", "Ошибка", "Карандаш"],
            correct: 1
        }
    ],

    // Магия чисел (Фиолетовый) - 10 вопросов
    4: [
        {
            question: "Какое число при умножении на себя даёт 64?",
            answers: ["6", "7", "8", "9"],
            correct: 2
        },
        {
            question: "Я задумал число, умножил его на 3 и получил 24. Какое число я задумал?",
            answers: ["6", "7", "8", "9"],
            correct: 2
        },
        {
            question: "Какая цифра в русском алфавите обозначается словом из трёх букв?",
            answers: ["1", "3", "4", "7"],
            correct: 1
        },
        {
            question: "Продолжи последовательность: 5, 10, 15, 20, ...",
            answers: ["21", "25", "30", "35"],
            correct: 1
        },
        {
            question: "Сколько всего цифр?",
            answers: ["9", "10", "11", "Бесконечно"],
            correct: 1
        },
        {
            question: "Какое число является предыдущим для числа 400?",
            answers: ["300", "399", "401", "390"],
            correct: 1
        },
        {
            question: "Чему равна половина от половины числа 20?",
            answers: ["5", "10", "15", "20"],
            correct: 0
        },
        {
            question: "Какое число является решением уравнения X - 15 = 30?",
            answers: ["15", "25", "45", "50"],
            correct: 2
        },
        {
            question: "Сумма каких двух одинаковых чисел равна 18?",
            answers: ["8 и 8", "9 и 9", "7 и 7", "10 и 10"],
            correct: 1
        },
        {
            question: "Какое число делится без остатка на 2, на 3 и на 6?",
            answers: ["9", "12", "15", "18"],
            correct: 1
        }
    ],

    // Измерения и величины (Желтый) - 10 вопросов
    5: [
        {
            question: "Сколько сантиметров в 3 метрах?",
            answers: ["30 см", "100 см", "300 см", "3000 см"],
            correct: 2
        },
        {
            question: "Что измеряют в литрах?",
            answers: ["Длину", "Массу", "Объём", "Время"],
            correct: 2
        },
        {
            question: "Сколько граммов в одном килограмме?",
            answers: ["10", "100", "500", "1000"],
            correct: 3
        },
        {
            question: "Сколько секунд в одной минуте?",
            answers: ["60", "100", "24", "360"],
            correct: 0
        },
        {
            question: "Какая из этих величин самая большая?",
            answers: ["1 км", "100 м", "1000 см", "500 дм"],
            correct: 0
        },
        {
            question: "Сколько дециметров в 1 метре?",
            answers: ["10", "100", "1000", "5"],
            correct: 0
        },
        {
            question: "Что можно измерить весами?",
            answers: ["Длину стола", "Температуру чая", "Массу арбуза", "Объём воды"],
            correct: 2
        },
        {
            question: "Сколько часов в трёх сутках?",
            answers: ["24", "48", "60", "72"],
            correct: 3
        },
        {
            question: "Как называется день, который бывает раз в 4 года?",
            answers: ["Праздник", "Високосный", "Выходной", "День рождения"],
            correct: 1
        },
        {
            question: "Что тяжелее: 2 кг железа или 2000 г ваты?",
            answers: ["Железо", "Вата", "Одинаково", "Нет правильного ответа"],
            correct: 2
        }
    ],

    // Математика в загадках (Оранжевый) - 10 вопросов
    6: [
        {
            question: "Два конца, два кольца, посередине гвоздик. Что это?",
            answers: ["Линейка", "Ножницы", "Часы", "Карандаш"],
            correct: 1
        },
        {
            question: "Чем больше из меня берёшь, тем больше я становлюсь. Что я?",
            answers: ["Деньги", "Яма", "Торт", "Знания"],
            correct: 1
        },
        {
            question: "Нас 7 братьев, годами равные, именами разные. Кто мы?",
            answers: ["Месяцы", "Дни недели", "Часы", "Ноты"],
            correct: 1
        },
        {
            question: "Без окон, без дверей, полна горница людей. Что это?",
            answers: ["Телевизор", "Огурец", "Автобус", "Арбуз"],
            correct: 1
        },
        {
            question: "Что имеет 4 пальца и 1 большой палец, но не является живым существом?",
            answers: ["Обезьяна", "Перчатка", "Робот", "Рисунок"],
            correct: 1
        },
        {
            question: "Висит груша — нельзя скушать. Что это?",
            answers: ["Груша", "Лампочка", "Игрушка", "Шар"],
            correct: 1
        },
        {
            question: "Сидит дед, во сто шуб одет. Кто его раздевает, тот слёзы проливает.",
            answers: ["Капуста", "Лук", "Морковь", "Дед Мороз"],
            correct: 1
        },
        {
            question: "Не огонь, а жжется. Что это?",
            answers: ["Спичка", "Солнце", "Крапива", "Печка"],
            correct: 2
        },
        {
            question: "Всегда во рту, а не проглотишь. Что это?",
            answers: ["Язык", "Зубы", "Еда", "Жвачка"],
            correct: 0
        },
        {
            question: "Кто говорит на всех языках?",
            answers: ["Переводчик", "Эхо", "Учитель", "Радио"],
            correct: 1
        }
    ],

    // Задачи на время (Голубой) - 10 вопросов
    7: [
        {
            question: "Сколько минут в трёх часах?",
            answers: ["60", "120", "180", "300"],
            correct: 2
        },
        {
            question: "Если сейчас без пятнадцати пять, сколько времени?",
            answers: ["4:45", "5:15", "4:30", "5:45"],
            correct: 0
        },
        {
            question: "Какой месяц самый короткий в году?",
            answers: ["Январь", "Февраль", "Апрель", "Декабрь"],
            correct: 1
        },
        {
            question: "Урок начался в 9:00 и длился 45 минут. Во сколько он закончился?",
            answers: ["9:45", "10:00", "9:30", "9:50"],
            correct: 0
        },
        {
            question: "Сколько дней в високосном году?",
            answers: ["365", "366", "364", "367"],
            correct: 1
        },
        {
            question: "Если сегодня пятница, какой день был позавчера?",
            answers: ["Среда", "Четверг", "Суббота", "Воскресенье"],
            correct: 0
        },
        {
            question: "Четверть часа — это сколько минут?",
            answers: ["10", "15", "20", "25"],
            correct: 1
        },
        {
            question: "Сколько месяцев составляют 1 год и 6 месяцев?",
            answers: ["16", "18", "20", "24"],
            correct: 1
        },
        {
            question: "Который час будет через 20 минут после 3:30?",
            answers: ["3:50", "4:00", "3:55", "4:10"],
            correct: 0
        },
        {
            question: "Как называются сутки, когда день равен ночи?",
            answers: ["Солнцестояние", "Равноденствие", "Полнолуние", "Новолуние"],
            correct: 1
        }
    ],

    // Математика в мире вокруг (Розовый) - 10 вопросов
    8: [
        {
            question: "У тебя есть 50 рублей. Сколько денег у тебя останется после покупки шоколадки за 35 рублей?",
            answers: ["5 рублей", "10 рублей", "15 рублей", "20 рублей"],
            correct: 2
        },
        {
            question: "В автобусе ехало 12 человек. На остановке вышли 5, а вошли 3. Сколько человек стало в автобусе?",
            answers: ["7", "10", "12", "14"],
            correct: 1
        },
        {
            question: "Полкилограмма творога — это сколько граммов?",
            answers: ["50 г", "100 г", "250 г", "500 г"],
            correct: 3
        },
        {
            question: "Папе 36 лет, а сыну 9. Во сколько раз папа старше сына?",
            answers: ["В 3 раза", "В 4 раза", "В 5 раз", "В 6 раз"],
            correct: 1
        },
        {
            question: "На одной полке 15 книг, на другой на 5 книг меньше. Сколько книг на двух полках?",
            answers: ["20", "25", "30", "35"],
            correct: 1
        },
        {
            question: "Если пирог разрезали на 8 равных частей и 3 части съели, сколько частей осталось?",
            answers: ["3", "5", "6", "8"],
            correct: 1
        },
        {
            question: "В пакете 3 кг муки. Сколько граммов муки в двух таких пакетах?",
            answers: ["3000 г", "5000 г", "6000 г", "9000 г"],
            correct: 2
        },
        {
            question: "Билет в кино стоит 200 рублей. Сколько будут стоить 2 билета?",
            answers: ["300 руб.", "400 руб.", "500 руб.", "600 руб."],
            correct: 1
        },
        {
            question: "Длина класса 8 метров, а ширина на 2 метра меньше. Чему равна ширина класса?",
            answers: ["4 м", "5 м", "6 м", "7 м"],
            correct: 2
        },
        {
            question: "Собрали 20 кг яблок. Из 5 кг сварили варенье. Какую часть всех яблок использовали?",
            answers: ["Половину", "Треть", "Четверть", "Пятую часть"],
            correct: 3
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
    console.log("🚀 Математическая игра загружается...");
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
    
    console.log("✅ Математическая игра готова!");
});

// Загрузка игроков с главной страницы
function loadPlayersFromMain() {
    const savedPlayers = localStorage.getItem('gamePlayers');
    if (savedPlayers) {
        gameState.players = JSON.parse(savedPlayers);
        // Добавляем items для каждого игрока
        gameState.players.forEach(player => {
            if (!player.items) {
                player.items = { ball: 0, rubiks: 0, tree: 0, orange: 0, book: 0, pizza: 0 };
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
                items: { ball: 0, rubiks: 0, tree: 0, orange: 0, book: 0, pizza: 0 }
            },
            {
                name: 'Игрок 2', 
                color: '#4ECDC4',
                coins: 0,
                items: { ball: 0, rubiks: 0, tree: 0, orange: 0, book: 0, pizza: 0 }
            }
        ];
        console.log("👥 Созданы демо-игроки");
    }
}

// Создание игровой доски с такими же размерами как в шахматах
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
            cell.dataset.name = MATH_CONFIG.letters[col] + (8 - row);
            
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
    
    MATH_CONFIG.colors.forEach(color => {
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
    const sortedItems = Object.entries(MATH_CONFIG.items)
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
    const targetCellName = MATH_CONFIG.letters[randomCol] + (8 - randomRow);
    
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
    
    const questions = MATH_QUESTIONS[colorId];
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
    const colorInfo = MATH_CONFIG.colors.find(c => c.id === colorId);
    
    document.getElementById('question-category').textContent = `🎯 ${colorInfo.category}`;
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
    const colorInfo = MATH_CONFIG.colors.find(c => c.id === colorId);
    
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
            .map(([item, _]) => MATH_CONFIG.items[item].emoji)
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
    const itemInfo = MATH_CONFIG.items[itemType];
    
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
            player.items = { ball: 0, rubiks: 0, tree: 0, orange: 0, book: 0, pizza: 0 };
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