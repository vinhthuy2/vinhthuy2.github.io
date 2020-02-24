const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('.section');
const highlighted = document.querySelector('.highlighted');
let options = {
  root: document.querySelector('null'),
  rootMargin: '48px 0px 0px 0px',
  threshold: 0.7
};
let observer = new IntersectionObserver(entries => {
  console.log('inter');
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      [...links].forEach(link => {
        link.children[0].style.setProperty('color', '#444444');
      });
      const activeLink = [...links].find(link =>
        link.classList.contains(entry.target.id + '-link')
      );

      activeLink.children[0].style.setProperty('color', 'white');

      const background = getComputedStyle(entry.target).background;
      console.log(background);

      let top = activeLink.getBoundingClientRect().top;
      let left = activeLink.getBoundingClientRect().left;
      let bottom = activeLink.getBoundingClientRect().bottom;
      let right = activeLink.getBoundingClientRect().right;
      let height = activeLink.getBoundingClientRect().height;
      let width = activeLink.getBoundingClientRect().width;

      highlighted.style.left = `${left}px`;
      highlighted.style.top = `${top}px`;
      highlighted.style.bottom = `${bottom}px`;
      highlighted.style.right = `${right}px`;
      highlighted.style.height = `${height}px`;
      highlighted.style.width = `${width}px`;
      highlighted.style.background = background;
      window.history.replaceState({}, '', '#' + entry.target.id);
    }
  });
}, options);

[...sections].forEach(sec => {
  console.log(sec);
  observer.observe(sec);
});

// console.log(sections);
