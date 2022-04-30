export const layerCof = (props) => {
  const { color, label } = props;
  const layerElm = document.createElement('div');
  layerElm.classList.add('layer');
  layerElm.innerHTML += `<div class="layer">
<div
  class="layer__color"
  style="background-color: ${color}"
></div>
<div class="layer__label">${label}</div>
</div>`;

  return layerElm;
};

const cappuccino = [
  { color: '#feeeca', label: 'mléčná pěna' },
  { color: '#fed7b0', label: 'teplé mléko' },
  { color: '#613916', label: 'espresso' },
];

const coffeeLayer = document.querySelector('.drink__info');
coffeeLayer.appendChild(layerCof({ color: '#feeeca', label: 'mléčná pěna' }));
coffeeLayer.appendChild(layerCof({ color: '#fed7b0', label: 'teplé mléko' }));
coffeeLayer.appendChild(layerCof({ color: '#613916', label: 'espresso' }));
