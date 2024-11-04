# Verificador de Dimensões de Imagens

Um sistema moderno e intuitivo para verificar imagens em um diretório e identificar aquelas que não possuem dimensões múltiplas de 4. Ideal para designers, desenvolvedores e equipes de QA que precisam garantir que as imagens seguem padrões específicos de tamanho.

## 📑 Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Hospedagem](#hospedagem)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuições](#contribuições)
- [Licença](#licença)

## 📖 Sobre o Projeto
O Verificador de Dimensões de Imagens permite que o usuário selecione um diretório e analise todas as imagens presentes, incluindo subdiretórios, para verificar se suas dimensões (largura e altura) são múltiplas de 4. O sistema exibe uma lista das imagens que não atendem aos requisitos e permite a exportação dessa listagem para um arquivo `.csv`.

## ✨ Funcionalidades
- Seleção de diretórios para análise.
- Verificação de dimensões de todas as imagens no diretório e subdiretórios.
- Exibição dos resultados em uma tabela interativa.
- Exportação dos resultados para um arquivo `.csv`.
- Botão "Nova Análise" para limpar os resultados e realizar uma nova verificação.
- Interface intuitiva com design responsivo e moderno.

## 🛠️ Tecnologias Utilizadas
- **[React](https://reactjs.org/)** - Biblioteca para construção de interfaces.
- **[Vite](https://vitejs.dev/)** - Ferramenta de build rápida para projetos web.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript para tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS para estilos utilitários.
- **File System Access API** - Permite acesso aos diretórios do sistema do usuário para análise de arquivos.

## ⚙️ Pré-requisitos
Antes de iniciar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## 🚀 Instalação e Execução
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/verificador-imagens.git
   ```
   
2. **Navegue até o diretório do projeto:**
   ```bash
   cd verificador-imagens
   ```
   
3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Execute o projeto:**
   ```bash
   npm run dev
   ```
   
## 🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para bugs e melhorias, ou enviar pull requests para novas funcionalidades.

### Como Contribuir
1. **Fork** o projeto.
2. Crie uma **branch** para sua feature (`git checkout -b feature/minha-feature`).
3. **Commit** suas alterações (`git commit -m 'Adiciona Minha Feature'`).
4. **Push** para a branch (`git push origin feature/minha-feature`).
5. Abra um **Pull Request**.
---

Feito com ❤️ pela equipe da Gameficare Studios
```
