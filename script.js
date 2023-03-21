function openmenu() {
  let scrollMenuOpen = document.getElementById('scroll-menu')
  if (scrollMenuOpen.style.width == '0px') {
    scrollMenuOpen.style.width = '300px'
  } else {
    scrollMenuOpen.style.width = '0px'
  }
}
