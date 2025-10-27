import { templates } from './templates.js';

export function initRouter() {
  const app = document.getElementById('app');

  function render(route) {
    switch(route) {
      case '#/projetos':
        app.innerHTML = templates.projetos;
        break;
      case '#/cadastro':
        app.innerHTML = templates.cadastro;
        import('./formValidation.js').then(mod => mod.initFormValidation());
        break;
      default:
        app.innerHTML = templates.home;
    }
  }

  window.addEventListener('hashchange', () => render(location.hash));
  render(location.hash); // renderiza na primeira carga
}
