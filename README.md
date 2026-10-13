# HEATHERS: «После звонка» — сайт «За кулисами»

Одностраничный адаптивный сайт о создании **вымышленной камерной постановки «После звонка» по мотивам мюзикла Heathers**. Проект сделан специально под учебное задание «За кулисами».

> **Важно:** вся история производства, даты, команда, количество репетиций, декорации и контакты на странице вымышлены. Тексты написаны специально для этого сайта. Оригинальный Heathers используется только как сюжетный и визуальный референс; тексты песен и материалы профессиональных постановок не копируются.

## Структура проекта

```text
heathers-backstage/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
    └── script.js

> Фотографии и видео подгружаются из открытых внешних источников, чтобы сайт уже был визуально заполнен.
```

## Что реализовано

- первый экран с названием, анонсом и датой премьеры;
- паспорт постановки с шестью показателями;
- пять последовательных этапов: замысел → подготовка → сцена → репетиции → премьера;
- три участника команды с разными ролями и отдельная цитата;
- два реально воспроизводимых видео через встроенный YouTube-плеер;
- фотодневник из восьми разных кадров;
- блок «Деталь со сцены» с шестью заметками, циклическим переключением и отдельной фотографией для каждой заметки;
- четыре и более содержательных внешних источника;
- контакты с `mailto:` и `tel:`;
- БЭМ-именование блоков и элементов;
- одна система повторяющихся компонентов (`button`, `card`, `media`, `section` и др.);
- адаптивные состояния для 320, 768, 1024, 1280 px и промежуточных ширин;
- видимый `:focus-visible` для клавиатурного управления;
- поддержка `prefers-reduced-motion`;
- локальный системный шрифт через `local()` в `@font-face` с запасными вариантами;
- одна ненавязчивая декоративная анимация.

## Фото и видео

Фотодневник содержит восемь отдельных фотографий: они не повторяются ни в афише, ни в пяти этапах истории, ни в карточках команды, ни в шести заметках блока «Деталь со сцены». У каждой заметки также собственная фотография, не входящая в фотодневник.

Сейчас сайт уже заполнен реальными визуальными материалами. Фотографии подключены с Wikimedia Commons по прямым адресам файлов и используются как визуальные референсы театрального процесса. Видео встроены с YouTube: это официальный трейлер и опубликованные live-кадры мюзикла Heathers.

При желании внешние источники можно заменить собственными локальными файлами, не меняя структуру карточек.

## Источники и референсы

### Оригинальный мюзикл

1. [Heathers The Musical — Concord Theatricals](https://www.concordtheatricals.com/p/56725/heathers-the-musical)
2. [Heathers The Musical — Concord Theatricals UK](https://www.concordtheatricals.co.uk/p/56725/heathers-the-musical)
3. [Heathers — Concord Theatricals Germany](https://www.concordtheatricals.de/heathers.html)
4. [Official London Theatre — Behind the scenes at Heathers](https://officiallondontheatre.com/news/behind-the-scenes-at-heathers-the-musical/)

### Фотографии

5. [Artists rehearsal — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Artists_rehearsal.jpg) — CC BY-SA 4.0, автор Andy Kusama.
6. [The Tank - 56 Seat Theater — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:The_Tank_-_56_Seat_Theater.jpg) — CC BY-SA 4.0, автор Anthony Sertel Dean.
7. [Backstage Rehearsal (34362419273) — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Backstage_Rehearsal_(34362419273).png) — CC0 1.0, автор Sakuramai Toronto.
8. [Set construction — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Set_construction.jpg) — attribution only, автор KeepOnTruckin.
9. [Stage actors — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Stage_actors.jpg) — CC BY-SA 3.0, автор Elcaminoplaza.
10. [Boxwood Lockers in the hallway — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Boxwood_Lockers_in_the_hallway.jpg) — public domain, автор ChinaFlag.
11. [Stage Curtain (11724113954) — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Stage_Curtain_(11724113954).jpg) — CC BY-SA 2.0.
12. [Theater stage — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Theater_stage.jpg) — CC BY-SA 3.0, автор Beyond silence.
13. [Costume workshop at a theatre, Prague - 8581 — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Costume_workshop_at_a_theatre,_Prague_-_8581.jpg) — CC BY-SA 3.0, автор Jorge Royan.
14. [Blackbox, Gateway Theatre — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Blackbox,_Gateway_Theatre.jpg) — CC BY-SA 4.0, автор Clearlyxconfused.
15. [Berlin — Scenography and set construction work — 4114](https://commons.wikimedia.org/wiki/File:Berlin-_Scenography_and_set_construction_work_-_4114.jpg) — CC BY-SA 3.0, Jorge Royan.
16. [Dresden — Scenography, set construction and theatrical scenery — 2585](https://commons.wikimedia.org/wiki/File:Dresden_-_Scenography,_set_construction_and_theatrical_scenery_-_2585.jpg) — CC BY-SA 3.0, Jorge Royan.
17. [Dresden — Tailor at work — 2606](https://commons.wikimedia.org/wiki/File:Dresden_-_Tailor_at_work_-_2606.jpg) — CC BY-SA 3.0, Jorge Royan.
18. [A rehearsal of an opera at Esplanade, Singapore](https://commons.wikimedia.org/wiki/File:A_rehearsal_of_an_opera_occurs_on_stage,_at_Esplanade_(a_Centre_for_Performing_Arts),_in_Singapore.jpg) — CC BY-SA 4.0, Rogbeer.
19. [Stage of the Theatre, Esplanade, Singapore, during rehearsals](https://commons.wikimedia.org/wiki/File:Stage_of_the_Theatre,_Esplanade_%E2%80%93_Theatres_on_the_Bay,_Singapore,_during_rehearsals_-_20070119.jpg) — public domain, автор I luv erky.


### Восемь отдельных фотографий фотодневника

20. [A rehearsal in Rakvere Theatre's small stage, 2013](https://commons.wikimedia.org/wiki/File:A_rehearsal_in_Rakvere_Theatre%27s_small_stage,_2013..jpg) — CC BY-SA 3.0, автор Rakvereteater.
21. [Kolyada-Theatre, rehearsal, March 2014.02](https://commons.wikimedia.org/wiki/File:Kolyada-Theatre,_rehearsal,_March_2014.02.jpg) — CC BY-SA 4.0, автор Gerarus.
22. [Kolyada-Theatre, rehearsal, March 2014.04](https://commons.wikimedia.org/wiki/File:Kolyada-Theatre,_rehearsal,_March_2014.04.jpg) — CC BY-SA 4.0, автор Gerarus.
23. [Sound design in Rakvere Theatre 2014](https://commons.wikimedia.org/wiki/File:Sound_design_in_Rakvere_Theatre_2014..jpg) — CC BY-SA 3.0, автор Rakvereteater.
24. [Wexford Theatre Royal stageset](https://commons.wikimedia.org/wiki/File:Wexford_Theatre_Royal_stageset.jpg) — CC BY 3.0, автор Andreas Praefcke.
25. [A control room or tech booth for lighting and sound in a theatre](https://commons.wikimedia.org/wiki/File:A_control_room_or_tech_booth_for_lighting_and_sound_in_a_theatre.jpg) — CC BY 4.0, автор Harrison Keely.
26. [Trap under Alexandra Palace Theatre stage](https://commons.wikimedia.org/wiki/File:Trap_under_Alexandra_Palace_Theatre_stage.jpg) — CC0 1.0, автор CuriosityScribe.
27. [The Theater Prop Room (3632767321)](https://commons.wikimedia.org/wiki/File:The_Theater_Prop_Room_(3632767321).jpg) — CC BY 2.0, автор Tulane Public Relations.

Все шесть кадров блока «Деталь со сцены» используются только в этом блоке и не повторяют изображения фотодневника. Полный список источников и лицензий также находится в [`docs/media-sources.md`](docs/media-sources.md).

### Видео

28. [Heathers The Musical - NEW Trailer](https://www.youtube.com/watch?v=jIgUVKxCp-o) — официальный канал HEATHERS: The Musical.
29. [LIVE FOOTAGE from HEATHERS THE MUSICAL!](https://www.youtube.com/watch?v=Gpad8LUEwsg) — официальный канал HEATHERS: The Musical.

Все тексты, даты, состав команды, показатели и название «После звонка» вымышлены и созданы специально для учебного проекта. Фотографии используются как визуальные референсы и не являются фотографиями вымышленной команды.

## Краткий план работы

1. Собрана сюжетная концепция вымышленной камерной постановки.
2. Определены хронология, команда, показатели и визуальная система.
3. Сверстаны смысловые разделы одной страницы.
4. Добавлена адаптивная сетка и состояния для мобильных и широких экранов.
5. Создан единственный обязательный JS-интерактив — циклический блок заметок.
6. Добавлены доступные состояния фокуса, семантические заголовки, `alt` и `prefers-reduced-motion`.
7. Подготовлены плейсхолдеры для фотографий и видео.
8. Проведена контрольная проверка размеров и содержания.

## Контрольные скриншоты

В эту папку можно сохранить четыре скриншота после локального запуска проекта:

- `screenshots/320.png`
- `screenshots/768.png`
- `screenshots/1024.png`
- `screenshots/1280.png`

### Рекомендуемый способ проверки

Откройте `index.html` в браузере или запустите любой простой локальный HTTP-сервер в папке проекта. Проверьте также промежуточные ширины 470, 900 и 1100 px.

Дополнительно увеличьте масштаб страницы в браузере и временно сделайте один из длинных абзацев в 2–3 раза длиннее. Содержание не должно исчезать или образовывать горизонтальную прокрутку.

## Две проблемы, которые стоит зафиксировать в отчёте

### Проблема 1 — переполнение навигации на маленькой ширине

На ширине около 320 px все пункты навигации физически не помещаются в одну строку. Навигация сделана горизонтально прокручиваемой внутри шапки, поэтому сама страница не получает горизонтальный скролл.

### Проблема 2 — слишком плотная сетка фотодневника

На планшетной ширине восемь карточек в 12-колоночной сетке выглядели слишком мелкими. Для диапазона до 1080 px количество колонок в одной карточке увеличено, а на мобильных все фотографии переходят в одну колонку. Это сохраняет читаемость подписей и пропорции изображений.

## Git-история

Рекомендуемый набор содержательных коммитов:

```text
feat: создать структуру страницы и первый экран
feat: добавить историю постановки и паспорт
feat: добавить команду и медиадневник
feat: реализовать адаптивную фотогалерею и интерактивные заметки
docs: оформить README и источники проекта
```

- Полный перечень лицензий и ссылок вынесен в [docs/media-sources.md](docs/media-sources.md).
