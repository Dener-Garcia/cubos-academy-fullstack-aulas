create database dindin;

create table usuarios (
    id serial primary key,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    senha varchar(100) not null
);

create table categorias (
    id serial primary key,
    descricao varchar(100) not null
);

create table transacoes (
    id serial primary key,
    descricao varchar(100) not null,
    valor integer not null,
    data timestamp not null,
    categoria_id integer not null references categorias(id),
    usuario_id integer not null references usuarios(id),
    tipo varchar(10) not null check (tipo in ('entrada', 'saida'))
);