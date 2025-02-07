import React, { useState, useEffect } from "react";

const AlunoForm = ({ onSave, currentAluno }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (currentAluno) {
      setName(currentAluno.name);
      setEmail(currentAluno.email);
      setPhone(currentAluno.phone);
    }
  }, [currentAluno]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h2>{currentAluno ? "Editar Aluno" : "Adicionar Aluno"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">{currentAluno ? "Salvar Alterações" : "Adicionar Aluno"}</button>
      </form>
    </div>
  );
};

export default AlunoForm;
