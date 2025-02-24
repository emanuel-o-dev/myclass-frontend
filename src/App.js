import React, { useState, useEffect } from "react";
import axios from "axios";
import AlunoList from "./components/AlunosList";
import AlunoForm from "./components/AlunoForm";
import './index.css';
import logo from "./logo.svg";  

function App() {
  const [alunos, setAlunos] = useState([]);
  const [currentAluno, setCurrentAluno] = useState(null);

  const fetchAlunos = async () => {
    try {
      const response = await axios.get("/api/alunos");
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
      console.log("Aluno enviado:", aluno);
      if (currentAluno) {
        await axios.put(`/api/alunos/${currentAluno.id}`, aluno);
      } else {
        await axios.post("/api/alunos", aluno);
      }
      setCurrentAluno(null); 
      fetchAlunos();
    } catch (error) {
      console.error("Erro ao salvar aluno", error);
    }
  };

  const handleEditAluno = (aluno) => {
    setCurrentAluno(aluno);
  };

  const handleDeleteAluno = async (id) => {
    try {
      await axios.delete(`/api/alunos/${id}`);
      fetchAlunos();
    } catch (error) {
      console.error("Erro ao excluir aluno", error);
    }
  };

  return (
    <div className="App">
      <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
      <h1>Gestão de Alunos</h1>
      <AlunoForm onSave={handleCreateOrUpdateAluno} currentAluno={currentAluno} />
      <AlunoList alunos={alunos} onEdit={handleEditAluno} onDelete={handleDeleteAluno} />
    </div>
  );
}

export default App;
