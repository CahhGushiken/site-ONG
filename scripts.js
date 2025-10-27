document.addEventListener('DOMContentLoaded', function() {
  function maskCPF(value){
    return value
      .replace(/\D/g,'')
      .replace(/(\d{3})(\d)/,'$1.$2')
      .replace(/(\d{3})(\d)/,'$1.$2')
      .replace(/(\d{3})(\d{1,2})$/,'$1-$2');
  }
  function maskPhone(value){
    return value
      .replace(/\D/g,'')
      .replace(/(\d{2})(\d)/,'($1) $2')
      .replace(/(\d{5})(\d{4})$/,'$1-$2');
  }

  const cpf = document.getElementById('cpf');
  const tel = document.getElementById('telefone');
  if (cpf) cpf.addEventListener('input', e => e.target.value = maskCPF(e.target.value));
  if (tel) tel.addEventListener('input', e => e.target.value = maskPhone(e.target.value));

  const form = document.getElementById('cadastroForm');
  if (form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const status = document.getElementById('formStatus');
      status.textContent = 'Formulário enviado com sucesso (simulação local). Nenhum dado foi realmente enviado.';
      status.style.color = 'green';
      form.reset();
    });
  }
});
