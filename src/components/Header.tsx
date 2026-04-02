import { useLocation, useNavigate } from "react-router-dom"

export default function HeaderComponent() {
  const router = useLocation()
  const navigate = useNavigate();

  return(
    <header className="flex flex-col lg:flex-row justify-between bg-white mb-12 px-8 py-4">
        <div>
            <h1 className="text-3xl font-bold mb-4 uppercase text-center bg-gradient-to-b from-green-900 via-green-700 to-green-500 bg-clip-text text-transparent">Monitoramento de Estufas</h1>
        </div>
        <div className="text-center">
          <button onClick={() => navigate(`/home`)}><span className={`text-green-900 uppercase font-bold text-lg lg:text-2xl mx-2 lg:mx-8 hover:text-yellow-400 ${router.pathname=== '/home' ? 'text-yellow-400': ''}`}>Home</span></button>
          <button onClick={() => navigate(`/estufa/1`)}><span className={`text-green-900 uppercase font-bold text-lg lg:text-2xl mx-2 lg:mx-8 hover:text-yellow-400 ${router.pathname=== '/estufa/1' ? 'text-yellow-400': ''}`}>Estufa Alface</span></button>
          <button onClick={() => navigate(`/estufa/2`)}><span className={`text-green-900 uppercase font-bold text-lg lg:text-2xl mx-2 lg:mx-8 hover:text-yellow-400 ${router.pathname=== '/estufa/2' ? 'text-yellow-400': ''}`}>Estufa Repolho</span></button>
        </div>
    </header>
  )
}