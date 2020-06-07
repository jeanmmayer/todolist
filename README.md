# To Do List!

É um projeto de gerenciamento de listas de tarefas do dia a dia.

### Tecnologias Principais

  - Angular v9.*
  - Bootstrap 4

### Instalação
  - Pré requisitos
     - Instalar o NodeJs; (v10.16.3)
     - Instalar o AngularCLI; (v9.1.7)
     - Ter um login e senha para acessar o Fluig Tasks.
  - Clonar este repositório
      - `git clone https://github.com/jeanmmayer/todolist.git`;
  - Pela linha de comando, navegar até a pasta criada ao clonar o projeto;
  - Editar o arquivo `src/environments/environment.ts`
    - Em `generateTokenUrl`, substituir `yourusername` e `yourpassword`;
    - Em `authGenerateToken` substituir pela autorização;
    - Caso necessite dessas informações, enviei para a Sara no e-mail.
  - Dentro da pasta, executar:
    - `npm install`;
    - `npm run start`;
  - Ao finalizar a execução, o sistema estará rodando em [localhost:4200](http://localhost:4200)

  ### Melhorias
   - Sistema de login e permissionamento de rotas;
   - Alterar o status de uma tarefa;
   - Editar uma tarefa;
   - Melhorar o carregamento das tasks e listas;
   - Layout de listas e tarefas no geral.