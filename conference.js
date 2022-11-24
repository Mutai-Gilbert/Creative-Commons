// Navigation menu
const menu = document.querySelector('.menu-icon');
const ul = document.querySelector('.nav-menu');
const crossIcon = document.querySelector('times');
const mobileMenu = document.querySelectorAll('.mobile-menu');
let menuState = false;

function toggleMenu() {
  if (menuState) {
    ul.classList.remove('df');
    menuState = false;
  } else {
    ul.classList.add('df');
    menuState = true;
  }
}
menu.addEventListener('click', toggleMenu);
mobileMenu.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});
crossIcon.addEventListener('click', toggleMenu);

// Creating the speakers section dynamically

const speakersData = [
  {
    id: 'speaker1',
    profileImage: './img/speaker-1.png.jpg',
    name: 'Mike Wyzkoski',
    company: 'Co Founder Dream Team',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
  },
  {
    id: 'speaker2',
    profileImage: './img/speaker-2.png.jpg',
    name: 'Zara Johnson',
    company: 'CEO WaterBridges',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
  },
  {
    id: 'speaker3',
    profileImage: './img/speaker-3.png.jpg',
    name: 'Henry Steve',
    company: 'Founder & CEO Cinder Inc.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
  },
  {
    id: 'speaker4',
    profileImage: './img/speaker-4.png.jpg',
    name: 'Lara James',
    company: 'Founder & CEO Fire Myth',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
  },
];

// load the data into the speakers section
const Load = document.querySelector('.speakers');
// iterate through the object
speakersData.forEach((Project) => {
  const content = `
  <div class="${Project.id}">
                <img src="${Project.profileImage}" alt="${Project.name}">
                <div class="speaker-info">
                    <h3>${Project.name}</h3>
                    <h6>${Project.company}</h6>
                    <p>${Project.description}</p>
                </div>

            </div>
  `;
  Load.innerHTML += content;
});
