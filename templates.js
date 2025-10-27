export const templates = {
  home: `
    <section class="hero">
      <h1>Bem-vindo à SuperaCão</h1>
      <img src="assets/images/FOTOPRINCIPAL2.png" alt="Cão feliz" class="hero-img">
      <p>Uma ONG dedicada ao resgate e reabilitação de cães abandonados</p>
      <a class="btn-primary" href="#/cadastro">Quero ajudar!</a>
    </section>

    <section class="quem-somos">
      <div class="container">
        <h2>Quem Somos</h2>
        <p>
          A <strong>SuperaCão</strong> é uma ONG comprometida com resgate e adoção de cães em abandono.
        </p>
        <p>Também promovemos campanhas de conscientização, castração e educação sobre posse responsável.</p>
      </div>
    </section>

    <hr class="divisoria">

    <section class="mvv">
      <div class="container">
        <h2>Missão, Visão e Valores</h2>
        <div class="mvv-grid">
          <div class="mvv-item">
            <h3>Missão</h3>
            <p>Resgatar, cuidar e promover adoção responsável de cães em vulnerabilidade.</p>
          </div>
          <div class="mvv-item">
            <h3>Visão</h3>
            <p>Ser referência em acolhimento e bem-estar animal, inspirando uma sociedade mais compassiva.</p>
          </div>
          <div class="mvv-item">
            <h3>Valores</h3>
            <ul>
              <li>Amor e respeito aos animais;</li>
              <li>Transparência e ética;</li>
              <li>Responsabilidade social;</li>
              <li>Trabalho em equipe;</li>
              <li>Educação e conscientização.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,

  projetos: `
    <h1>Atuais Projetos</h1>
    <section class="cards">
      <article class="card">
        <img src="assets/images/ADOÇÃO.png" alt="Cão resgatado">
        <h2>Resgate & Adoção</h2>
        <p>Resgatamos cães em risco e encontramos lares amorosos.</p>
      </article>
      <article class="card">
        <img src="assets/images/VACINAÇÃO.png" alt="Campanha de vacinação">
        <h2>Vacinação Solidária</h2>
        <p>Campanhas gratuitas de vacinação em comunidades carentes.</p>
      </article>
      <article class="card">
        <img src="assets/images/EDUCAÇÃO.png" alt="Educação animal">
        <h2>Educação & Conscientização</h2>
        <p>Informação sobre cuidado e responsabilidade com animais de estimação.</p>
      </article>
    </section>
  `,

  cadastro: `
    <h1>Cadastro de Voluntário / Doação</h1>
    <form id="cadastroForm">
      <label for="nome">Nome completo *</label>
      <input id="nome" name="nome" type="text" required minlength="3" placeholder="Seu nome">

      <label for="email">E-mail *</label>
      <input id="email" name="email" type="email" required placeholder="email@exemplo.com">

      <label for="cpf">CPF *</label>
      <input id="cpf" name="cpf" type="text" required placeholder="000.000.000-00">

      <label for="cep">CEP *</label>
      <input id="cep" name="cep" type="text" required placeholder="00000-000">

      <button type="submit">Enviar</button>
      <button type="reset">Limpar</button>
    </form>
  `
};
