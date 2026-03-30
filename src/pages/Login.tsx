import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-green-200">
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-xl font-bold mb-4 uppercase">Monitoramento de Estufas</h1>
        <input className="input mb-2" placeholder="Usuário" />
        <input className="input mb-4" type="password" placeholder="Senha" />

        <button
          onClick={() => navigate("/home")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}