# 🛍️ Mini E-Commerce

Um projeto de mini e-commerce desenvolvido com tecnologias web puras, oferecendo uma experiência de compra simples e intuitiva.

![Status do Projeto](https://img.shields.io/badge/Status-Em%20desenvolvimento-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📋 Descrição

Este projeto é um **mini e-commerce** desenvolvido utilizando apenas **HTML, CSS e JavaScript puro** (sem frameworks ou bibliotecas externas). O objetivo é demonstrar a criação de uma aplicação de e-commerce funcional e responsiva, com foco em simplicidade e performance.

A aplicação permite aos usuários navegar por um catálogo de produtos, filtrar por categorias, adicionar itens ao carrinho e gerenciar suas compras através de um carrinho lateral interativo.

---

## 🖼️ Demonstração

<!-- Adicione aqui uma captura de tela ou GIF do projeto -->
![Demonstração do Projeto](./screenshot.png)

> 💡 **Nota:** Adicione uma captura de tela ou GIF mostrando o projeto em funcionamento.

---

## ✨ Funcionalidades

- ✅ **Listagem de Produtos**: Exibição dinâmica de produtos com imagens, nomes e preços
- ✅ **Filtro por Categoria**: Filtragem de produtos por categorias (Roupas, Calçados, Acessórios)
- ✅ **Carrinho de Compras**: Carrinho lateral com animação de abertura/fechamento
- ✅ **Adicionar ao Carrinho**: Botão para adicionar produtos ao carrinho
- ✅ **Cálculo Automático**: Total do carrinho calculado automaticamente
- ✅ **Remover Itens**: Funcionalidade para remover itens do carrinho
- ✅ **Persistência de Dados**: Carrinho salvo no `localStorage` do navegador
- ✅ **Formatação de Moeda**: Valores formatados em Real Brasileiro (BRL)
- ✅ **Design Responsivo**: Interface adaptável a diferentes tamanhos de tela

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **HTML5** | - | Estrutura e semântica da aplicação |
| **CSS3** | - | Estilização e animações |
| **JavaScript (ES6+)** | - | Lógica e interatividade |
| **JSON** | - | Armazenamento de dados dos produtos |
| **LocalStorage API** | - | Persistência do carrinho de compras |

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Servidor HTTP local (opcional, mas recomendado)

### Passo a Passo

1. **Clone ou baixe o repositório**
   ```bash
   git clone https://github.com/Jardeltf/Mini-E-Commerce
   cd "Projeto 1 - Copia"
   ```

2. **Abra o projeto**

   **Opção 1: Servidor Local (Recomendado)**
   
   Se você tem Python instalado:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Ou Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   Se você tem Node.js instalado:
   ```bash
   npx http-server -p 8000
   ```
   
   Depois, acesse: `http://localhost:8000`

   **Opção 2: Abrir Diretamente**
   
   Simplesmente abra o arquivo `index.html` no seu navegador. 
   
   ⚠️ **Nota:** Alguns navegadores podem bloquear requisições de arquivos locais (fetch). Nesse caso, use a Opção 1.

3. **Pronto!** 🎉
   
   O projeto estará rodando e você poderá interagir com o catálogo e o carrinho.

---

## 📁 Estrutura de Pastas

```
Projeto 1 - Copia/
│
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos e animações CSS
├── app.js              # Lógica JavaScript da aplicação
├── products.json       # Dados dos produtos em formato JSON
│
└── assets/             # Pasta de imagens dos produtos
    ├── apple_watch.jpg
    ├── belt.png
    ├── denim_jacket.png
    ├── sneakers.jpg
    ├── sneakers2.png
    ├── t-shit_black.jpg
    ├── t-shit_black2.jpg
    ├── Watch.png
    └── White_sneaker.png
```

### Descrição dos Arquivos

- **`index.html`**: Contém a estrutura HTML com header, filtros, lista de produtos e carrinho lateral
- **`style.css`**: Define todos os estilos visuais, layout responsivo e animações do carrinho
- **`app.js`**: Implementa toda a lógica JavaScript: renderização de produtos, filtros, gerenciamento do carrinho e persistência
- **`products.json`**: Arquivo JSON com os dados dos produtos (id, nome, preço, categoria, imagem)

---

## 🗺️ Roadmap - Possíveis Melhorias

### Funcionalidades Futuras

- [ ] **Quantidade de Itens**: Permitir aumentar/diminuir quantidade de itens no carrinho
- [ ] **Busca de Produtos**: Campo de busca para encontrar produtos por nome
- [ ] **Ordenação**: Opções para ordenar produtos por preço (menor/maior)
- [ ] **Página de Detalhes**: Visualização detalhada de cada produto
- [ ] **Validação de Formulário**: Formulário de checkout com validação
- [ ] **Histórico de Compras**: Salvar histórico de compras realizadas
- [ ] **Favoritos**: Sistema de favoritos para produtos
- [ ] **Notificações**: Feedback visual ao adicionar/remover itens
- [ ] **Modo Escuro**: Tema dark/light para a interface
- [ ] **Testes**: Implementação de testes unitários e de integração

### Melhorias Técnicas

- [ ] **Otimização de Imagens**: Compressão e uso de formatos modernos (WebP)
- [ ] **Acessibilidade**: Melhorias de acessibilidade (ARIA labels, navegação por teclado)
- [ ] **Performance**: Lazy loading de imagens e otimizações de renderização
- [ ] **PWA**: Transformar em Progressive Web App (PWA)
- [ ] **TypeScript**: Migração para TypeScript para maior segurança de tipos

---

## 📝 Notas de Desenvolvimento

- O projeto utiliza **JavaScript puro** sem dependências externas
- Os dados dos produtos são carregados via `fetch()` a partir do arquivo `products.json`
- O carrinho é persistido no `localStorage` do navegador
- A formatação de moeda utiliza a API `Intl.NumberFormat` do JavaScript

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 📧 Contato

<!-- Adicione suas informações de contato aqui -->
- **Email**: [jardel_ter@hotmail.com](mailto:jardel_ter@hotmail.com)
- **LinkedIn**: [Jardel Terci Flores](https://www.linkedin.com/in/jardel-terci-flores-b39055b7/)
- **GitHub**: [@Jardeltf](https://github.com/jardeltf)

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 🙏 Agradecimentos

- Agradecimentos a todos que contribuíram com sugestões e feedback
- Inspiração em projetos de e-commerce open source
- Comunidade de desenvolvedores web

---

<div align="center">

**Desenvolvido usando HTML, CSS e JavaScript puro**

⭐ Se este projeto foi útil para você, considere dar uma estrela!

</div>

