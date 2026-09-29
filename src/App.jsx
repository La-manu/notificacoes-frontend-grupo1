import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

// Componente interno para bloquear acessos não autenticados
function RotaProtegida({ children }) {
  const { token } = useAuth();
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function App() {
  return (
    <Routes>
      {/* Rota inicial protegida */}
      <Route
        path="/"
        element={
          <RotaProtegida>
            <Home />
          </RotaProtegida>
        }
      />
      
      {/* Rota pública de acesso */}
      <Route path="/login" element={<Login />} />
      
      {/* Caso digitem /home no navegador, redireciona para a raiz / */}
      <Route path="/home" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
