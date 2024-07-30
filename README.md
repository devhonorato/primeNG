![Static Badge](https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-blue?style=for-the-badge)

# primeNG

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 16.2.14.

## Sobre o projeto

Como programador, entendo que os templates, como o Sakai do PrimeNG, costumam vir com muitos recursos que nem sempre são úteis para cada projeto. 

Por isso, simplifiquei o template base do Sakai, removendo tudo o que não é essencial e fornecendo apenas a estrutura básica. 

Com isso, você pode iniciar seu projeto de forma fácil e rápida, economizando tempo e recursos. 

Espero que esta versão simplificada seja útil para você!

-------

## Links 

[SAKAI](https://sakai.primeng.org/)

[PRIMENG](https://www.primefaces.org/primeng-v16-lts/) versão 16.9.1.

-------

### Preparando o Ambiente

Antes de prosseguir, verifique se você tem o `Node.js` e o `npm` instalados. Se você não os tiver, você pode baixá-los nos seguintes links:

- [Node.js](https://nodejs.org/)

O `npm` é instalado automaticamente com o `Node.js`.

Certifique-se de que o Node.js e o npm estão instalados corretamente executando os seguintes comandos:

```
node -v
npm -v
```

Se as versões forem exibidas, a instalação foi bem-sucedida. Em seguida, na raiz do projeto `\primeNG`, execute:

```
npm install
```
Isso instalará todas as bibliotecas e pacotes necessários para o projeto.

-------

### Servidor de desenvolvimento

Agora que você tem todas as dependências instaladas, você pode iniciar o servidor de desenvolvimento com o seguinte comando:

```
ng serve
```
Isso iniciará o servidor de desenvolvimento do Angular. \
Acesse [http://localhost:4200/](http://localhost:4200/) para visualizar o aplicativo em execução. \
*A aplicação será recarregada automaticamente se você modificar qualquer um dos arquivos de origem.
#### Script `package.json`

```
{
  "scripts": {
    "start": "ng serve --port 0 --open"
  }
}
```
Para iniciar a aplicação em modo de desenvolvimento, executando-a em uma porta disponível escolhida automaticamente e abrindo uma janela do navegador para visualizar o aplicativo em execução, você pode usar um dos seguintes comandos:
```
npm run start 
```
Ou
```
ng serve --port 0 --open
```
Isso iniciará o servidor de desenvolvimento do Angular, permitindo que você visualize a aplicação em tempo real em seu navegador padrão. A porta será escolhida automaticamente para evitar conflitos com outras aplicações em execução.

-------

### Geração de código

Para criar facilmente novos `componentes`, `diretivas`, `pipes`, `serviços`, `classes`, `guards`, `interfaces`, `enums` ou `módulos` em seu projeto Angular, você pode utilizar o comando `ng generate`.

**Exemplo de criação de um novo componente:**

Para gerar um novo componente chamado `nome-do-componente`, execute o seguinte comando:

```  
ng generate component component/nome-do-componente
```
Isso criará automaticamente os arquivos necessários para o componente, incluindo os arquivos TypeScript, HTML, CSS e os testes unitários.

**Outros tipos de geração**:

Além da geração de componentes, você também pode usar o comando ng generate para criar outros elementos, como `diretivas`, `pipes`, `serviços`, `classes`, `guards`, `interfaces` e `enums`. \

Por exemplo:

Para gerar uma diretiva: 
```
ng generate directive directive/nome-da-diretiva
```
Para gerar um serviço:
```
ng generate service service/nome-do-servico
```
Para gerar uma classe: 
```
ng generate class class/nome-da-classe
```
Para gerar um guard (proteção de rotas): 
```
ng generate guard guard/nome-do-guard
```
Para gerar uma interface: 
```
ng generate interface interface/nome-da-interface
```
Para gerar uma enumeração: 
```
ng generate enum enum/nome-da-enum
```
Para gerar um módulo: 
```
ng generate module nome-do-modulo
```
-------

### Compilação

Execute `ng build` para compilar o projeto. \
Os arquivos da compilação serão armazenados no diretório `dist/primeNG`.

#### Script `package.json`

```
{
  "scripts": {
    "build": "ng build --configuration production --aot --build-optimizer --vendor-chunk --optimization"
  }
}
```
Para compilar o projeto, aplicando otimizações como o Ahead-of-Time (AOT) compilation e a criação de um arquivo separado para bibliotecas de terceiros (vendor chunk) para melhorar o desempenho da aplicação, execute um dos seguintes comandos:
```
npm run build 
```
Ou
```
ng build --configuration production --aot --build-optimizer --vendor-chunk --optimization
```
Isso iniciará o processo de compilação, otimizando o projeto para uso em um ambiente de produção. Certifique-se de que todas as dependências e configurações estejam corretamente configuradas antes de executar o comando de build.


- `--configuration production`: Essa opção especifica qual configuração do ambiente deve ser usada durante a compilação. Em geral, a configuração `production` é usada para otimizar o aplicativo para implantação em produção, enquanto a configuração padrão é usada para desenvolvimento.

- `--aot`: A compilação Ahead-of-Time (AOT) é um processo que traduz o código TypeScript do aplicativo em código JavaScript otimizado durante a construção. Isso ajuda a melhorar o desempenho do aplicativo e a reduzir o tamanho dos pacotes.

- `--build-optimizer`: O otimizador de construção é uma ferramenta que faz várias otimizações no código, como a eliminação de código morto e a redução do tamanho dos pacotes. Isso pode ajudar a melhorar o desempenho e reduzir o tamanho do pacote do aplicativo.

- `--vendor-chunk`: Isso configura a criação de um pacote separado para as bibliotecas de terceiros, o que pode melhorar o cache do navegador e reduzir o tamanho do pacote principal do aplicativo.

- `--optimization`: Essa opção ativa várias otimizações adicionais, como a eliminação de código não utilizado, a árvore de dependências do pacote e outras otimizações de tamanho.

-------

### Executando testes unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

-------

### Executando testes de ponta a ponta

Execute `ng e2e` para executar os testes de ponta a ponta em uma plataforma de sua escolha. \
Para usar este comando, você precisa primeiro adicionar um pacote que implemente capacidades de teste de ponta a ponta.

-------

### Ajuda adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a página de [ Visão Geral e Referência de Comandos do Angular CLI](https://angular.io/cli).
