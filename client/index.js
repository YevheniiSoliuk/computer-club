import { getComputers } from "./api/computers";
import { getRooms } from "./api/rooms";
import { getReviews } from "./api/reviews";
import { bookDate } from "./api/bookDate";

window.onhashchange = changeActiveNavLink;
window.onscroll = changeAddressHash;
window.onload = initApp;

function initApp() {
  const formNode = document.querySelector("#book-date-form");
  formNode.addEventListener('submit', (e) => {
    e.preventDefault();
  
    bookDate();
  });

  getComputers();
  getRooms();
  getReviews();
  onLinkClick();
}

function changeAddressHash() {
  const sections = document.querySelectorAll('section');
  let currentSectionId = null;

  sections.forEach(section => {
    if ((section.offsetTop - 150) < Number.parseInt(window.scrollY)) {
      currentSectionId = section.id;
    }
  })

  if (currentSectionId) {
    window.history.pushState(null, null, `#${currentSectionId}`);
    changeActiveNavLink(); 
  }
}

function changeActiveNavLink() {
  const navLinksNodeList = document.querySelectorAll('.nav-items a');

  navLinksNodeList.forEach(navLink => {
    if (navLink.hash === window.location.hash) {
      navLink.parentElement.style.borderBottom = '4px solid var(--white-color)';
      navLink.parentElement.style.transition = 'all 0.25s linear';
    } else {
      navLink.parentElement.style = undefined;
    }
  });
}

function onLinkClick() {
  const navLinksNodeList = document.querySelectorAll('.nav-items a');
  const input = document.querySelector('#hamburger');
  
  navLinksNodeList.forEach(navLink => {
    navLink.addEventListener('click', () => {
      input.click();
    })
  })
}