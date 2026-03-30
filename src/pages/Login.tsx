import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-green-600">
      <div className="bg-white p-6 rounded-xl shadow flex flex-col">
        <h1 className="text-xl font-bold mb-4 uppercase text-center bg-gradient-to-b from-green-900 via-green-700 to-green-500 bg-clip-text text-transparent">Monitoramento de Estufas</h1>
        <input className="input mb-2" placeholder="Usuário" />
        <input className="input mb-4" type="password" placeholder="Senha" />

        <button
          onClick={() => navigate("/home")}
          className="bg-green-600 text-white px-4 py-2 rounded align-center m-auto"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}