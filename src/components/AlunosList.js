import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AlunosList() {
  const [alunos, setAlunos] = useState([]);
  const [error, setError] = useState(null);

	useEffect(() => {
	  axios.get('/api/alunos')
	    .then((response) => setAlunos(response.data))
	    .catch((error) => setError(error.message));
	}, []);


  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {alunos.map((aluno) => (
        <li key={aluno.id}>
          {aluno.nome} - {aluno.idade} - {aluno.curso}
        </li>
      ))}
    </ul>
  );
}

export default AlunosList;

