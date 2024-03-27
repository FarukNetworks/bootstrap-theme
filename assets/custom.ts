// import $ from 'jquery';
// import 'slick-carousel';

const menuContainer = document.querySelector('.navbar-nav');

function handleClick(event) {
  const targetElement = event.target as Element;
  const menuItem = targetElement.closest('.menu-item-has-children');

  if (window.innerWidth > 1200 || menuItem.classList.contains('opened')) {
    window.location.href = menuItem.children[0].getAttribute('href');
  } else {
    menuItem.classList.add('opened');
  }
}

if (menuContainer) {
  menuContainer.addEventListener('click', handleClick);
}





// $(document).ready(function() {
//   // Typescript and Jquery code here 
// });
  console.log('Welcome to Bootstrap');
  

// const sectionToObserve = document.querySelector('');

//     const scrollSliderSlide = function (entries) {
//         const [entry] = entries;
//         console.log(entry);
      
//         if (entry.isIntersecting) {
//         // do something when refering section is in viewport
//       };
//     }
      
//       const headerObserver = new IntersectionObserver(scrollSliderSlide, {
//         root: null,
//         threshold: 0,
//       });
      
//       headerObserver.observe(sectionToObserve);

    // @ts-ignore
   // to ignore slick method

