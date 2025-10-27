export function initFormValidation() {
  const form = document.getElementById('cadastroForm');
  if (!form) return;

  // Máscaras simples
  form.cpf.addEventListener('input', e => {
    let v = e.target.value.replace(/\D/g,'').slice(0,11);
    v = v.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    e.target.value = v;
  });

  form.cep.addEventListener('input', e => {
    let v = e.target.value.replace(/\D/g,'').slice(0,8);
    e.target.value = v.replace(/^(\d{5})(\d{1,3})$/,'$1-$2');
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();
    const cep = form.cep.value.trim();

    let erros = [];
    if (nome.length < 3) erros.push('Nome deve ter ao menos 3 letras.');
    if (!email.includes('@')) erros.push('E-mail inválido.');
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) erros.push('CPF no formato incorreto.');
    if (!/^\d{5}-\d{3}$/.test(cep)) erros.push('CEP no formato incorreto.');

    const alertBox = document.querySelector('.alert');
    if (alertBox) alertBox.remove();

    const msg = document.createElement('div');
    msg.className = 'alert ' + (erros.length ? 'alert-error' : 'alert-success');
    msg.textContent = erros.length ? erros.join(' ') : 'Formulário enviado com sucesso!';
    form.prepend(msg);

    if (!erros.length) form.reset();
  });
}
