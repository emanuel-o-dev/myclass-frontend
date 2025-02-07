import React, { useState, useEffect } from "react";

const AlunoForm = ({ onSave, currentAluno }) => {
  const [aluno, setAluno] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
  });

  useEffect(() => {
    if (currentAluno) {
      setAluno(currentAluno);
    }
  }, [currentAluno]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prev) => ({
      ...prev,
      [name]: name === "grade" ? parseFloat(value) || "" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(aluno);
    setAluno({ name: "", email: "", phone: "", grade: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={aluno.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={aluno.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Telefone"
        value={aluno.phone}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="grade"
        placeholder="Nota (0-10)"
        value={aluno.grade}
        onChange={handleChange}
        min="0"
        max="10"
        step="0.1"
        required
      />
      <button type="submit">
        {currentAluno ? "Atualizar" : "Adicionar"}
      </button>
    </form>
  );
};

export default AlunoForm;
