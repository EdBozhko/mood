const navigation = document.querySelector('#fp-nav ul');
const buttons = document.querySelectorAll(' #fp-nav ul li');
const slider = document.createElement('div');

const svg = document.createElement('svg');

const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
svg.appendChild(defs);
const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
filter.setAttribute('id', 'fancy-goo');
defs.appendChild(filter);
slider.setAttribute('id', 'slider');

const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
feGaussianBlur.setAttribute('in', 'SourceGraphic');
feGaussianBlur.setAttribute('stdDeviation', '5');
feGaussianBlur.setAttribute('result', 'blur');
filter.appendChild(feGaussianBlur);

const feColorMatrix = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
feColorMatrix.setAttribute('in', 'blur');
feColorMatrix.setAttribute('type', 'matrix');
feColorMatrix.setAttribute('values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -9');
feColorMatrix.setAttribute('result', 'goo');
filter.appendChild(feColorMatrix);

const feComposite = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
feComposite.setAttribute('in', 'SourceGraphic');
feComposite.setAttribute('in2', 'goo');
feComposite.setAttribute('operator', 'atop');
filter.appendChild(feComposite);

navigation.appendChild(slider);
navigation.appendChild(svg);

// buttons.forEach((button) => {
//   button.addEventListener('click', clickHandler);
// });

// function clickHandler(e) {
//   const target = e;
//   const position = {
//     top: target.currentTarget.offsetTop,
//     left: target.currentTarget.offsetLeft,
//   };
//   slider.style.marginTop = '0px';
//   slider.style.top = `${position.top}px`;
// }

const links = document.querySelectorAll(' #fp-nav ul li a');

function callback(mutationsList) {
  mutationsList.forEach((mutation) => {
    if (mutation.attributeName === 'class') {
      const target = mutationsList[1];
      const position = {
        top: target.target.offsetParent.offsetTop,
        left: target.target.offsetParent.offsetLeft,
      };
      console.log(target.target.offsetParent.offsetTop);
      slider.style.marginTop = '0px';
      slider.style.top = `${position.top}px`;
    }
  });
}

const mutationObserver = new MutationObserver(callback);
links.forEach((link) => {
  mutationObserver.observe(link, { attributes: true });
});
