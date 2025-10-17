# SuperaCão — Entrega pronta (Unidade HTML5)

## O que está incluso
- index.html — página institucional (semântica e acessível)
- projetos.html — listagem de projetos com figuras
- cadastro.html — formulário pronto para integração com Formspree
- assets/css/styles.css — tema verde & branco, responsivo
- assets/js/scripts.js — máscaras, menu e validação parcial
- assets/images/ — imagens placeholders (SVG)
- README.md — instruções (este arquivo)

## PERSONALIZAÇÕES (procure por REALIZARALTERAÇÃOO!!!)
Em vários arquivos você verá comentários `<!-- REALIZARALTERAÇÃOO!!! -->` indicando:
- Trocar imagens (`assets/images/...`)
- Substituir links de redes sociais
- **Substituir o action do form** para o seu endpoint do Formspree

### Como configurar o Formspree (rápido)
1. Acesse https://formspree.io/ e crie uma conta (gratuita).
2. Crie um formulário e pegue o endpoint no formato: `https://formspree.io/f/XXXXXXXX`
3. Abra `cadastro.html` e substitua o atributo `action` do `<form>` (procure por `SEU_CODIGO_AQUI`) com o seu endpoint.
4. Salve. Agora o formulário vai enviar para o Formspree e você receberá as submissões no e-mail/configuração do Formspree.

### Como testar em tempo real (recomendado)
Use **Visual Studio Code + Live Server**:
1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html` → **Open with Live Server**.
4. Deixe o navegador aberto na sua segunda tela e o VS Code na primeira.
5. Ao salvar (`Ctrl+S`) as mudanças, a página atualiza automaticamente.

### Como entregar no GitHub Pages
1. Crie repositório público no GitHub.
2. Faça commit de todos os arquivos mantendo a estrutura.
3. Vá em Settings → Pages → selecione branch `main` e `/root`.
4. Aguarde e envie o link público conforme instruções da sua atividade.

### Observações finais
- A máscara de CPF/telefone é apenas conveniência; para validação completa do CPF é necessário algoritmo específico. Posso adicionar isso se desejar.
- Se quiser, eu já altero as imagens e o action do form por você — me envie as imagens / o endpoint do Formspree e eu aplico.

Boa sorte na entrega!  
-- SuperaCão (projeto gerado automaticamente)
