
/* For Animation of Element */

var typed = new Typed('#element', {
  strings: ['Frontend Developer', 'SQA Engineer'],
  typeSpeed: 50,
});

/* For Counter */
const counterE1 = document.querySelector('.counter');
let counterNumber = 0;

const updateCounter = setInterval(function () {
  counterNumber++;
  counterE1.textContent = counterNumber;
  if (counterNumber >= 899) {
    clearInterval(updateCounter)
    counterE1.style.color = ' rgb(0 183 15)'
  }
}, 1)

/* For Hamburger */
function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'

}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }