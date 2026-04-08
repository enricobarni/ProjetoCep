📍 ## Projeto Consulta CEP
Aplicação desenvolvida em JavaScript Vanilla para realizar a busca de endereços completos a partir de um CEP informado. O projeto utiliza a API pública ViaCEP para obter dados em tempo real, focando na prática de requisições assíncronas e manipulação dinâmica do DOM.

🎯 ## Objetivos de Aprendizado
Este projeto foi fundamental para consolidar conceitos de base do desenvolvimento Web:

Consumo de APIs REST: Utilização do método fetch para buscar dados externos.

JavaScript Assíncrono: Implementação de funções async e manipulação de fluxos com await.

Tratamento de Exceções: Uso de blocos try/catch para capturar erros de rede ou retornos inválidos da API.

Clean Code com ES6+: Aplicação de desestruturação de objetos (Object Destructuring) e Template Literals.

🧠 ## Desafios e Lógica Técnica
1. ### Manipulação de Respostas Assíncronas
O maior desafio foi garantir que a interface respondesse corretamente ao tempo de processamento da rede. Utilizei o async/await para pausar a execução até que os dados fossem recebidos, garantindo que o usuário só visse o resultado após a conclusão do processamento.

2. ### Tratamento de Erros Robusto
Implementei uma lógica de verificação dupla no código:

Erro de Rede: Capturado pelo try/catch caso a requisição falhe.

CEP Não Encontrado: Verificação do atributo .erro retornado pela ViaCEP, lançando um new Error manualmente para informar o usuário.

3. ### Organização de Funções
O código foi modularizado para manter a responsabilidade única:

obterCep(): Captura apenas o valor do input.

gerarStringEndereco(): Formata a saída utilizando desestruturação de parâmetros.

BuscarDadosCep(): Orquestra a lógica principal de busca e exibição.

💻 ## Exemplo de Implementação
Trecho do código que demonstra a desestruturação dos dados recebidos da API para facilitar a leitura do código:

JavaScript
function gerarStringEndereco({logradouro, bairro, localidade, uf}) {
    return `${logradouro}<br>${bairro}<br>${localidade}/${uf}`;
}
🛠️ ## Tecnologias Utilizadas
HTML5: Estruturação semântica do formulário e container de saída.

CSS3: Estilização pura para layout e feedback visual.

JavaScript (Vanilla): Lógica de negócio, manipulação do DOM e integração HTTP.

🚀 ## Como Executar o Projeto
Você pode rodar este projeto de duas formas:

1. **Forma Recomendada (Com Live Server)**
Para aproveitar recursos como o Hot Reload (atualização automática ao salvar), siga estes passos:

Abra a pasta do projeto no VS Code.

Certifique-se de ter a extensão Live Server instalada.

Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".

A aplicação será aberta automaticamente em http://127.0.0.1:5500.

2. **Forma Rápida**
Como o projeto utiliza JavaScript Vanilla, você também pode simplesmente:

Clonar o repositório:

```
Bash
git clone https://github.com/enricobarni/ProjetoCep.git
```
Abrir o arquivo index.html diretamente em qualquer navegador moderno.

Desenvolvido por BARNEY2807 como parte da jornada de aprendizado em desenvolvimento Front-End.
