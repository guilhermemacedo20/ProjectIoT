import { useNavigate } from "react-router-dom";
import bgLogin from "../assets/backgroundLogin.png";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bgLogin})`, backgroundSize: "cover" }}
    >
      <div className="bg-white px-10 py-12 rounded-[40px] shadow-2xl flex flex-col w-[420px]">
        
        <h1 className="text-3xl font-bold mb-8 uppercase text-center bg-gradient-to-b from-green-900 via-green-700 to-green-500 bg-clip-text text-transparent">
          Monitoramento de Estufas
        </h1>

        <input
          className="mb-4 h-14 px-6 rounded-full bg-green-900 text-white placeholder-gray-300 focus:outline-none"
          placeholder="Usuário"
        />

        <input
          type="password"
          className="mb-6 h-14 px-6 rounded-full bg-green-900 text-white placeholder-gray-300 focus:outline-none"
          placeholder="Senha"
        />

        <button
          onClick={() => navigate("/home")}
          className="bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-full font-semibold"
        >
          Entrar
        </button>

      </div>
    </div>
  );
}