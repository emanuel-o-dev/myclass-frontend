import React from "react";

const AlunoList = ({ alunos, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Lista de Alunos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Nota</th>
            <th>Data de Criação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.name}</td>
              <td>{aluno.email}</td>
              <td>{aluno.phone}</td>
              <td>{aluno.grade !== null ? aluno.grade.toFixed(1) : "N/A"}</td>
              <td>{new Date(aluno.created_at).toLocaleString("pt-BR")}</td>
              <td>
                <button onClick={() => onEdit(aluno)}>Editar</button>
                <button onClick={() => onDelete(aluno.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlunoList;
