import './style.css';

export const Layer = (props) => {
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
