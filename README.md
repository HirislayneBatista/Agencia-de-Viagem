# ExploraMundo | Descubra o Inexplorado - Agência de Viagem

## 📌 Sobre o Projeto
Este projeto consiste na simulação do site inicial de uma agência de viagens fictícia, com foco na estruturação da interface e no planejamento do banco de dados.

## 📌 Funcionalidades
A aplicação oferece funcionalidades voltadas para a experiencia do usuário na reserva de passagens e pacotes de viagem, incluindo:

🔹 Cadastro e autenticação de usuários

🔹 Pesquisa de voos por origem, destino e data

🔹 Informações sobre hospedagem

🔹 Opções adicionais: Seguro viagem


*Nesta fase inicial, ainda não foram totalmente implementadas funcionalidades dinâmicas ou sistemas interativos.*

## 📌 Tecnologias Utilizadas
🔹 Frontend: HTML, CSS, Bootstrap, JavaScript (fase inicial)

🔹 Banco de Dados: MySQL (modelado no BrModelo)

## 📌 Modelagem de Banco de Dados
O banco de dados foi modelado com base no BRModelo, utilizando três níveis de abstração:

🔹 Conceitual → Representação das entidades e seus relacionamentos principais.

🔹 Lógico → Definição de atributos e estrutura detalhada.

🔹 Físico → Implementação final, incluindo a geração do script SQL para criação das tabelas.


Sendo assim, com base no formulário de busca de passagens, foi modelado um banco de dados com as seguintes tabelas principais:

🔹 Cliente → Realiza a compra de passagens.

🔹 Passagem → Contém informações sobre origem, destino e data.

🔹 Voo → Relacionado a passagens e assentos disponíveis.

🔹 Assento → Associado a um voo e pode ser reservado.

*O modelo segue o esquema 1:N entre Cliente e Passagem, N:1 entre Passagem e Voo, e 1:N entre Voo e Assentos disponíveis.*

## 📌 Próximos Passos
🔹 Implementação de funcionalidades dinâmicas com JavaScript e backend.

🔹 Criação do banco de dados no MySQL com base no diagrama físico.

🔹 Desenvolvimento da lógica de reserva e autenticação de usuários.

## 📌 Acesse o sistema
    *http*

#
*Desenvolvido por: Hirislayne Batista.*
#





