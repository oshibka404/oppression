const adjectives = [
	"Патриархальный",
	"Гендерный",
	"Доброжелательный",
	"Институциональный",
	"Обратный",
	"Позитивный",
	"Агрессивный",
	"Кириархальный",
	"Токсичный",
	"Культурный",
	"Сексуальный"
];

const predicates = [
	"Слат",
	"Виктим",
	"Мэн",
	"Фэт",
	"Гомо",
	"Транс",
	"Интер",
	"Цис",
	"Нео",
	"Гетеро",
	"Андро"
];
const actions = [
	["шейминг", 0], // 0 stands for male, 1 is for female
	["блейминг", 0],
	["сплейнинг", 0],
	["спрединг", 0],
	["сексизм", 0],
	["центризм", 0],
	["буллинг", 0],
	["фобия", 1],
	["мизогиния", 1],
	["нормативность", 1],
	["поляризация", 1]
];

const fullActions = [
	["сексизм", 0],
	["патриархат", 0],
	["кириархат", 0],
	["лукизм", 0],
	["абьюз", 0],
	["харрасмент", 0],
	["эйблизм", 0],
	["эйджизм", 0],
	["шовинизм", 0],
	["маскулинность", 1],
	["мизогиния", 1],
	["привилегия", 1],
	["аппроприация", 1],
	["объективация", 1]
];

const takeRandomElementOf = (arr) => 
	arr[Math.floor(Math.random() * arr.length)];

const getAdjectiveFor = (action) => {
	const sex = action[1];

	let oppression = "";
	if (Math.ceil(Math.random() - 0.5)) {
		oppression = oppression + takeRandomElementOf(adjectives) + " ";
		if (sex) {
			oppression = oppression.replace("ый", "ая");
		}
	}
	return oppression;
}

const generateCompositeOppression = () => {
	const action = takeRandomElementOf(actions);
	const sex = action[1];

	const adjective = getAdjectiveFor(action);

	const oppression = takeRandomElementOf(predicates) + action[0];

	return adjective ? (adjective + oppression.toLowerCase()) : oppression;
};

const generateSimpleOppression = () => {
	const action = takeRandomElementOf(fullActions);
	const adjective = getAdjectiveFor(action);
	const oppression = action[0];
	return adjective ? (adjective + oppression.toLowerCase()) : oppression;
};

const generate = () => {
	const totalCompositeOppressions = actions.length * predicates.length;
	const totalOppressions = totalCompositeOppressions + fullActions.length;
	const useCompositeOppression = !!Math.ceil(((totalCompositeOppressions / totalOppressions) - totalOppressions) || 1);

	return (
		useCompositeOppression
			? generateCompositeOppression()
			: generateSimpleOppression()
	);
};

window.onload = () => {
	const button = document.getElementById('button');
	const h1 = document.getElementById('h1');
	h1.innerText = generate();
	button.addEventListener('click', () => {
		h1.innerText = generate();
	});
};
