// O componente abaixo permite escalar um objeto de forma proporcional ao invés de valores fixos.
AFRAME.registerComponent('proporcional-scale', {
  schema: {
    multiplierUp: { type: 'number', default: 1.3 },
    multiplierDown: { type: 'number', default: 1/1.3 }, 
    dur: { type: 'int', default: 120 },  
    min: { type: 'number', default: 0.02 },      
    max: { type: 'number', default: 5 }      
  },

  init: function () {
    const el = this.el;
    const data = this.data;

    // Obtém as escalas do objeto e calcula a média para manter a proporcionalidade.
    const getCurrentUniformScale = () => {
      const s = el.object3D.scale;
      return (s.x + s.y + s.z) / 3;
    };

    // Função para animar a escala do objeto com base em um multiplicador.
    const animateToMultiplier = (mult) => {
      let current = getCurrentUniformScale();
      let target = current * mult;
      target = Math.max(data.min, Math.min(data.max, target));

      el.setAttribute('animation__proporcional', {
        property: 'scale',
        to: `${target} ${target} ${target}`,
        dur: data.dur,
        easing: 'easeOutQuad'
      });
    };

    el.addEventListener('mousedown', () => animateToMultiplier(data.multiplierUp));
    el.addEventListener('mouseup',   () => animateToMultiplier(data.multiplierDown));
  }
});

// Componente para exibir um painel de informações ao clicar no modelo 3D.
AFRAME.registerComponent('show-info-on-click', {
  init: function () {
    const el = this.el;

    el.addEventListener('click', () => {
      let panel = document.getElementById('info-panel');

      if (!panel) {
        panel = document.createElement('div');
        panel.id = 'info-panel';
        panel.innerHTML = `
          <h2>Informações dos Objetos</h2>
          <p>Seleção de móveis disponíveis com descrição e dimensões.</p>
          <button id="close-info">X</button>
          <ul>
            <li class="item">
              <img src="./assets/chair.png" alt="Cadeira" class="item-img">
              <div class="item-info">
                <p><strong>Cadeira</strong></p>
                <p>Tamanho: 45x45x90 cm</p>
                <p>Peso: 7 kg</p>
                <p>Material: Madeira e Couro</p>
              </div>
            </li>
            <li class="item">
              <img src="./assets/bed.png" alt="Cama" class="item-img">
              <div class="item-info">
                <p><strong>Cama de Solteiro</strong></p>
                <p>Tamanho: 200x90x50 cm</p>
                <p>Peso: 25 kg</p>
                <p>Material: Madeira e MDF</p>
              </div>
            </li>
            <li class="item">
              <img src="./assets/table.png" alt="Mesa" class="item-img">
              <div class="item-info">
                <p><strong>Mesa</strong></p>
                <p>Tamanho: 150x90x75 cm</p>
                <p>Peso: 40 kg</p>
                <p>Material: Madeira maciça</p>
              </div>
            </li>
          </ul>
        `;

        document.body.appendChild(panel);

        document.getElementById('close-info')
          .addEventListener('click', () => panel.remove());
      }
    });
  }
});
