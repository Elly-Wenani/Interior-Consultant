const headerIcon = document.querySelector('.menu-icon');
const headerLinks = document.querySelector('.right-container-list');
const headerName = document.querySelector('.logo-head');
const mainContent = document.querySelector('.main-container');
const profileContent = document.querySelector('.profile-container');
const footerContent = document.querySelector('.created-by');

console.log(headerIcon);
headerIcon.addEventListener('click', (e) => {
  let nav = document.querySelector('.fas');
  if (nav.classList.contains('fa-bars')) {
    nav.classList.remove('fa-bars');
    nav.classList.add('fa-times');
    headerLinks.classList.add('active');

    headerName.style.display = 'none';
    mainContent.style.display = 'none';
    profileContent.style.display = 'none';
    footerContent.style.display = 'none';
  } else if (nav.classList.contains('fa-times')) {
    nav.classList.remove('fa-times');
    nav.classList.add('fa-bars');
    headerLinks.classList.remove('active');

    headerName.style.display = 'flex';
    mainContent.style.display = 'block';
    profileContent.style.display = 'flex';
    footerContent.style.display = 'block';
  }
});
