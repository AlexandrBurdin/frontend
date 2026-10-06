(() => {
  const notes = [
    "Перед первым прогоном мы договорились: декорация не должна изображать школьный коридор буквально. Поэтому на сцене остались только шкафчики, два стула и линия света — всё остальное создают актёры.",
    "У постановки появился собственный ритм: хлопок школьного звонка передаёт зрителя из одной части истории в другую. Звук стал не фоном, а монтажной склейкой.",
    "Самая трудная сцена родилась не из длинной репетиции, а из короткой паузы. Мы убрали несколько реплик и обнаружили, что молчание лучше показывает, как героиня пытается сохранить лицо.",
    "Для костюмов выбрали три цветовых состояния: холодный синий для контроля, розовый для статуса и красный для момента, когда персонажи перестают притворяться.",
    "Вместо большого финального занавеса мы оставили свет включённым ещё на несколько секунд после последней реплики. Так зритель успевает увидеть сцену уже не как школьный спектакль, а как место, где только что что-то произошло.",
    "После генеральной репетиции стало ясно: наш спектакль работает именно потому, что команда не пыталась повторить экранный оригинал. Мы взяли его конфликт и настроение, но придумали собственный камерный язык."
  ];

  const noteElement = document.querySelector('[data-detail-note]');
  const counterElement = document.querySelector('[data-detail-counter]');
  const button = document.querySelector('[data-detail-next]');

  if (!noteElement || !counterElement || !button) return;

  let current = 0;

  const render = () => {
    noteElement.textContent = notes[current];
    counterElement.textContent = `${String(current + 1).padStart(2, '0')} / ${String(notes.length).padStart(2, '0')}`;
  };

  const nextNote = () => {
    current = (current + 1) % notes.length;
    render();
  };

  button.addEventListener('click', nextNote);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && document.activeElement === button) {
      nextNote();
    }
  });

  render();
})();
