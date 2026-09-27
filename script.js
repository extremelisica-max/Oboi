const cards = [
  {
    title: 'Здоровье в движении',
    description: 'Спокойная графика, мягкая структура и визуальная поддержка для нейтральных решений.',
    image: '01-Здоровье в движении/05_zdorovie_v_dvizhenii_180x100_preview.png',
    pdf: '01-Здоровье в движении/05_zdorovie_v_dvizhenii_180x100_print.pdf',
    tag: 'нейтрально',
    height: 280,
    size: 'medium'
  },
  {
    title: 'Камуфляж',
    description: 'Сдержанная, зрелая подача для подросткового и взрослого сегмента.',
    image: '02-Камуфляж/Армия — 180x100 — превью.jpg',
    pdf: '02-Камуфляж/Армия — 180x100 — печать.pdf',
    tag: 'подростки',
    height: 350,
    size: 'tall'
  },
  {
    title: 'Самолётики',
    description: 'Лёгкий и дружелюбный рисунок для детей, без визуального перегруза.',
    image: '_to_delete/Самолётики — обои_180x100_самолётики_превью.jpg',
    pdf: '03-Самолётики/обои_180x100_самолётики_печать.pdf',
    tag: 'дети',
    height: 260,
    size: 'short'
  },
  {
    title: 'Геометрические фигуры',
    description: 'Чёткая композиция и уверенный баланс для минималистичных решений.',
    image: '04-Геометрические фигуры/Геометрия света — 180x100 — превью.jpg',
    pdf: '04-Геометрические фигуры/Геометрия света — 180x100 — печать.pdf',
    tag: 'взрослые',
    height: 320,
    size: 'medium'
  },
  {
    title: 'Ферма',
    description: 'Дружелюбный, понятный и позитивный мотив для уверенного выбора родителей.',
    image: '05-Ферма/ферма_превью_повтор-72см_180x100.png',
    pdf: null,
    tag: 'дети',
    height: 340,
    size: 'tall'
  },
  {
    title: 'Полосатые коты',
    description: 'Игровой рисунок с хорошей читаемостью даже на маленьком ортезе.',
    image: '06-Полосатые коты/Полосатые коты — превью.jpg',
    pdf: '06-Полосатые коты/Полосатые коты — печать (100x100см, 300dpi).pdf',
    tag: 'дети',
    height: 280,
    size: 'medium'
  },
  {
    title: 'Огненный вихрь',
    description: 'Динамика и тепло без лишнего шума — сильный подростковый вариант.',
    image: '07-Огненный вихрь/Огненный вихрь — превью.jpg',
    pdf: '07-Огненный вихрь/Огненный вихрь — печать (100x100см, 300dpi).pdf',
    tag: 'подростки',
    height: 310,
    size: 'medium'
  },
  {
    title: 'Котята',
    description: 'Мягкий эмоциональный характер и трогательная визуальная логика для детей.',
    image: '08-Котята/Котята — превью (хаотичная раскладка).jpg',
    pdf: '08-Котята/Котята — печать (100x100см, хаотичная раскладка).pdf',
    tag: 'дети',
    height: 360,
    size: 'tall'
  },
  {
    title: 'Кино',
    description: 'Более яркая и узнаваемая тема для активного, персонализированного выбора.',
    image: '09-Кино/Кино — превью (хаотичная раскладка).jpg',
    pdf: '09-Кино/Кино — печать (100x100см, хаотичная раскладка).pdf',
    tag: 'субкультура',
    height: 290,
    size: 'medium'
  },
  {
    title: 'Мультяшки',
    description: 'Playful-стиль и лёгкая читаемость в семейном сегменте.',
    image: '10-Мультяшки/Мультяшки — превью (хаотичная раскладка).jpg',
    pdf: '10-Мультяшки/Мультяшки — печать (100x100см, хаотичная раскладка).pdf',
    tag: 'дети',
    height: 330,
    size: 'medium'
  },
  {
    title: 'День мёртвых',
    description: 'Темная и выраженная тема для более взрослой визуальной идентичности.',
    image: '11-День мёртвых/День мёртвых — превью (регулярный узор).jpg',
    pdf: '11-День мёртвых/День мёртвых — печать (100x100см, регулярный узор).pdf',
    tag: 'взрослые',
    height: 298,
    size: 'medium'
  },
  {
    title: 'Фрукты',
    description: 'Лёгкая, яркая и очень понятная тема для семейного ассортимента.',
    image: '12-Фрукты/Фрукты — превью (регулярный узор).jpg',
    pdf: '12-Фрукты/Фрукты — печать (100x100см, регулярный узор).pdf',
    tag: 'дети',
    height: 260,
    size: 'short'
  },
  {
    title: 'Жуки',
    description: 'Плотная графика с заметной текстурой и более активной подачей.',
    image: '13-Жуки/Жуки — превью (хаотичная раскладка).jpg',
    pdf: '13-Жуки/Жуки — печать (100x100см, хаотичная раскладка).pdf',
    tag: 'дети',
    height: 340,
    size: 'tall'
  },
  {
    title: 'Комиксы',
    description: 'Значимая и характерная тема для любителей яркой, выразительной графики.',
    image: '14-Комиксы/Комиксы — превью (хаотичная раскладка).jpg',
    pdf: '14-Комиксы/Комиксы — печать (100x100см, хаотичная раскладка).pdf',
    tag: 'подростки',
    height: 300,
    size: 'medium'
  }
];

const board = document.getElementById('board');

board.innerHTML = cards.map((card) => {
  const pdfLink = card.pdf
    ? `<a class="card-link" href="${card.pdf}" target="_blank" rel="noreferrer">PDF</a>`
    : `<span class="card-link disabled" aria-disabled="true">PDF</span>`;

  return `
    <article class="pin ${card.size}">
      <div class="pin-media">
        <img src="${card.image}" alt="${card.title}" loading="lazy" />
        <div class="pin-overlay">
          <button class="save-btn" aria-pressed="false">Сохранить</button>
        </div>
      </div>
      <div class="pin-body">
        <h4>${card.title}</h4>
        <p>${card.description}</p>
        <div class="pin-topline">
          <div class="author-row"><span class="author-avatar"></span><span class="author-name">${card.tag}</span></div>
          <div class="pin-footer">
            <span>Ready to print</span>
            ${pdfLink}
          </div>
        </div>
      </div>
    </article>
  `;
}).join('');

// Save button behaviour (local only)
document.querySelectorAll('.save-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const pressed = btn.classList.toggle('saved');
    btn.setAttribute('aria-pressed', pressed);
    btn.textContent = pressed ? 'Сохранено' : 'Сохранить';
  });
});
