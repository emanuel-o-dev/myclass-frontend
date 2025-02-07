import React, { useState, useEffect } from "react";
import axios from "axios";
import AlunoList from "./components/AlunoList";
import AlunoForm from "./components/AlunoForm";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [currentAluno, setCurrentAluno] = useState(null);

  // Carregar os alunos do backend
  const fetchAlunos = async () => {
    try {
      const response = await axios.get("https://your-backend-url/alunos");
      setAlunos(response.data);
    } catch (error) {
      console.error("Erro ao buscar alunos", error);
    }
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  const handleCreateOrUpdateAluno = async (aluno) => {
    try {
      if (currentAluno) {
        // Atualizar aluno
        await axios.put(`https://your-backend-url/alunos/${currentAluno.id}`, aluno);
      } else {
        // Criar aluno
        await axios.post("https://your-backend-url/alunos", aluno);
      }
      setCurrentAluno(null); // Limpa a edição atual
      fetchAlunos(); // Atualiza a lista de alunos
    } catch (error) {
      console.error("Erro ao salvar aluno", error);
    }
  };

  const handleEditAluno = (aluno) => {
    setCurrentAluno(aluno);
  };

  const handleDeleteAluno = async (id) => {
    try {
      await axios.delete(`https://your-backend-url/alunos/${id}`);
      fetchAlunos(); // Atualiza a lista após exclusão
    } catch (error) {
      console.error("Erro ao excluir aluno", error);
    }
  };

  return (
    <div className="App">
      <h1>Gestão de Alunos</h1>
      <AlunoForm onSave={handleCreateOrUpdateAluno} currentAluno={currentAluno} />
      <AlunoList alunos={alunos} onEdit={handleEditAluno} onDelete={handleDeleteAluno} />
    </div>
  );
}

export default App;
