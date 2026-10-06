import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const senha = formData.get("senha");

    try {
      await login(email, senha); 
      navigate("/home"); 
    } catch (error) {
      alert("Falha no login: verifique suas credenciais.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Acessar o Sistema</h2>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input name="email" type="email" required className="w-full border p-2 rounded" placeholder="seu@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Senha</label>
            <input name="senha" type="password" required className="w-full border p-2 rounded" placeholder="••••••••" />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[var(--color-marca-3)] text-white p-2 rounded font-medium opacity-90 hover:opacity-100 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
