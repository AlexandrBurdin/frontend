(() => {
  const notes = [
    {
      text: "Перед первым прогоном мы договорились: декорация не должна изображать школьный коридор буквально. Поэтому на сцене остались только шкафчики, два стула и линия света — всё остальное создают актёры.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Blackbox%2C%20Gateway%20Theatre.jpg?width=1600",
      alt: "Лаконичная камерная сцена, где свободное пространство становится частью композиции.",
      caption: "01. Камерное пространство: минимум предметов оставляет место для актёрского действия."
    },
    {
      text: "У постановки появился собственный ритм: хлопок школьного звонка передаёт зрителя из одной части истории в другую. Звук стал не фоном, а монтажной склейкой.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Berlin-_Scenography_and_set_construction_work_-_4114.jpg?width=1600",
      alt: "Рабочая сцена театра в процессе сборки декораций.",
      caption: "02. Сценические конструкции собираются так, чтобы перемены пространства не останавливали действие."
    },
    {
      text: "Самая трудная сцена родилась не из длинной репетиции, а из короткой паузы. Мы убрали несколько реплик и обнаружили, что молчание лучше показывает, как героиня пытается сохранить лицо.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dresden_-_Scenography%2C_set_construction_and_theatrical_scenery_-_2585.jpg?width=1600",
      alt: "Театральные декорации и сценографические элементы на этапе подготовки.",
      caption: "03. Сценография не иллюстрирует каждую реплику, а помогает сохранить паузу и напряжение."
    },
    {
      text: "Для костюмов выбрали три цветовых состояния: холодный синий для контроля, розовый для статуса и красный для момента, когда персонажи перестают притворяться.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dresden_-_Tailor_at_work_-_2606.jpg?width=1600",
      alt: "Работа мастера в театральной костюмерной.",
      caption: "04. Цветовая система начиналась в костюмерной: каждый оттенок должен был менять считывание персонажа."
    },
    {
      text: "Вместо большого финального занавеса мы оставили свет включённым ещё на несколько секунд после последней реплики. Так зритель успевает увидеть сцену уже не как школьный спектакль, а как место, где только что что-то произошло.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/A_rehearsal_of_an_opera_occurs_on_stage%2C_at_Esplanade_%28a_Centre_for_Performing_Arts%29%2C_in_Singapore.jpg?width=1600",
      alt: "Сцена во время репетиции с исполнителем и музыкантами на площадке.",
      caption: "05. Финальный свет оставался частью действия: последняя пауза продолжала историю после реплики."
    },
    {
      text: "После генеральной репетиции стало ясно: наш спектакль работает именно потому, что команда не пыталась повторить экранный оригинал. Мы взяли его конфликт и настроение, но придумали собственный камерный язык.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stage_of_the_Theatre%2C_Esplanade%20%E2%80%93%20Theatres_on_the_Bay%2C%20Singapore%2C%20during%20rehearsals%20-%2020070119.jpg?width=1600",
      alt: "Сценическая площадка театра перед репетиционным показом.",
      caption: "06. Генеральный прогон связал свет, пространство и ритм в самостоятельный сценический язык."
    }
  ];

  const noteElement = document.querySelector('[data-detail-note]');
  const counterElement = document.querySelector('[data-detail-counter]');
  const button = document.querySelector('[data-detail-next]');
  const imageElement = document.querySelector('[data-detail-image]');
  const captionElement = document.querySelector('[data-detail-caption]');

  if (!noteElement || !counterElement || !button || !imageElement || !captionElement) return;

  let current = 0;

  const render = () => {
    const note = notes[current];
    noteElement.textContent = note.text;
    counterElement.textContent = `${String(current + 1).padStart(2, '0')} / ${String(notes.length).padStart(2, '0')}`;

    if (imageElement.getAttribute('src') !== note.image) {
      imageElement.src = note.image;
    }
    imageElement.alt = note.alt;
    captionElement.textContent = note.caption;
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
