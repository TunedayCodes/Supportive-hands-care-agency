// ********** Navbar Toggle ************

const menuToggler = document.querySelector('.menu-toggler');
const navbar = document.querySelector('.navbar');
const collapsibleMenu = document.querySelector('.collapsible-menu');

menuToggler.addEventListener('click', () => {
    navbar.classList.toggle('show-menu');
    if(navbar.classList.contains('show-menu')){
        collapsibleMenu.style.maxHeight = collapsibleMenu.scrollHeight + 'px';
        setTimeout(() => {
            collapsibleMenu.style.overflow = 'visible';
        }, 300);
    }else {
        collapsibleMenu.style.maxHeight = '0px';
        collapsibleMenu.style.overflow = 'hidden';
    }
});

// ********** Set Date ************
// select span
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** Setup back to Top Link ************

const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight >200) {
    //console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

