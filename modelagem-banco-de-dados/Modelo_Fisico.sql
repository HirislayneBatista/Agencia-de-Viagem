-- Projeto Agencia de Viagem - Curso Recode Pro AI
-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.
-- Criado por: Hirislayne Batista

CREATE TABLE Cliente (
	Nome_Cliente VARCHAR(50),
	Email VARCHAR(20),
	Telefone NUMERIC(13),
	ID_Cliente INTEGER PRIMARY KEY
);

CREATE TABLE Passagem (
	Numero_Voo INTEGER,
	Destino VARCHAR(20),
	Origem VARCHAR(10),
	ID_Passagem INTEGER PRIMARY KEY,
	Data_Ida DATETIME,
	Data_Volta DATETIME,
	ID_Cliente INTEGER,
	ID_Voo INTEGER,
    	FOREIGN KEY(ID_Voo) REFERENCES Voo (ID_Voo),
	FOREIGN KEY(ID_Cliente) REFERENCES Cliente (ID_Cliente)
);

CREATE TABLE Voo (
	Horario_Partida DATETIME,
	Companhia_Aerea VARCHAR(10),
	Classe VARCHAR(10),
	Horario_Chegada DATETIME,
	ID_Voo INTEGER PRIMARY KEY,
	Numero_Voo INTEGER
);

CREATE TABLE Assento (
	ID_Assento VARCHAR(10) PRIMARY KEY,
	Numero_Assento INTEGER,
	Disponivel CHAR(3),
	ID_Voo INTEGER,
	FOREIGN KEY(ID_Voo) REFERENCES Voo (ID_Voo)
);

