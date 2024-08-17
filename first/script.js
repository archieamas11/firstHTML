window.addEventListener('scroll', function () {
  const header = document.querySelector('.header')

  if (window.scrollY > 0) {
    navbar.style.boxShadow = 'rgba(17, 17, 26, 0.1) 0px 1px 0px'
  } else {
    navbar.style.boxShadow = 'none'
  }
})
