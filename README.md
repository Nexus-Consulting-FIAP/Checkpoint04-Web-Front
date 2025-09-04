# Protótipo do site Passa Pra Elas :soccer:	

## Esse protótipo foi desenvolvido pelo grupo Nexus, Formados por:

|Nome|RM|
|--|--|
|[Lucas de Almeida Pires](https://github.com/LucasAllPires) | RM: 562757 |
|[Daniel Oliveira de Souza](https://github.com/xdlimao) | RM: 566284 |
|[João Pedro Raimundo Marcilio](https://github.com/Jonausss) | RM: 561603 |
|[Lucas Zanella Clemente](https://github.com/LucasZanellaClemente) | RM: 563880 |
|[João Pedro Ribeiro Palermo](https://github.com/jpPalermo) | RM: 562077 |
|[Felipe Campos Vianna Peres](https://github.com/camp0s0s) | RM: 562752 |

# Instruções e pré-requisitos :computer:	

## Para rodar o código do site será necessário:  

### O link anexado leva ao download/página príncipal de de cada elemento com instruções mais detalhadas

- [Vs Code](https://code.visualstudio.com)
- [Vite (React)](https://vite.dev)
- [Tailwind](https://tailwindcss.com)
- [Node.Js](https://nodejs.org)
- [GitBash](https://git-scm.com/downloads)

## Configuração

### Alterando o perfil principal do terminal para bash
  
1. Vá para as configurações do Vs Code
2. Digite na barra de pesquisa:
```
default profile
```
3. Selecione "bash"
<img width="423" height="384" alt="image" src="https://github.com/user-attachments/assets/9529aabe-9dc3-48b7-a4d8-a4e330dd708b" />  

4. Abra um novo terminal e o novo seu terminal agora está em bash

> [!NOTE]
> Nenhum dos comandos realizados no terminal irá funcionar se o terminal não for em Bash

## Instalação de Vite/React, Tailwind e outras dependencias
- Implementação do Vite+ React
```
npm create vite@latest
npm install
```
- Instalação das dependências
```
npm install react-router-dom
npm install react-icons
npm install react-hook-form
npm install tailwindcss @tailwindcss/vite
```
- Completando a implementação de tailwind[^1]
  - No arquivo `vite.config.js`, o arquivo precisa ficar como :
    ```js
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'
    
    // https://vite.dev/config/
    export default defineConfig({
      plugins: [
        react(),
        tailwindcss(),
      ],
      server: {
        allowedHosts: true
      }
    })
    ```
  
## Extensões Recomendadas para Vs Code na visualização do código

|Extensão|Criador|
|--|--|
|Auto Import | steoates |
|Code Runner | Jun Han |
|ES7 React/Redux/GraphQL/React-Native snippets | rodrigovallades |
|GitIcons | Git Icons |
|Tailwind CSS IntelliSense | Tailwind Labs |
|colorize | kamikillerto |

---
[^1]: [Implementação do Tailwind](https://tailwindcss.com/docs/installation/using-vite)

> Criado pelo [Grupo Nexus](https://github.com/Nexus-Consulting-FIAP)
