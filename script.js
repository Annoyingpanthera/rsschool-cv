const links = document.querySelectorAll('.navigation a');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const text = link.getAttribute('data-text');
    const letters = text.split('');

    link.innerHTML = '';
    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.transition = `color 0.2s ease ${index * 0.05}s`;
      span.style.color = 'transparent';
      link.appendChild(span);


      setTimeout(() => {
        span.style.color = '#800000';
      }, 10);
    });
  });

  link.addEventListener('mouseleave', () => {
    link.innerHTML = link.getAttribute('data-text');
  });
});


const logoContainers = document.querySelectorAll('.logo-container');

logoContainers.forEach(logoContainer => {
  const percentage = parseInt(logoContainer.getAttribute('data-percentage'));

  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = percentage + '%';

  logoContainer.appendChild(tooltip);


  logoContainer.addEventListener('mouseenter', () => {
    tooltip.style.opacity = 1;
  });

  logoContainer.addEventListener('mouseleave', () => {
    tooltip.style.opacity = 0;
  });
});

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: '.slider-dots',
});
});
