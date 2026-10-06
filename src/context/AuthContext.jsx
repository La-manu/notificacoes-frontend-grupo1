// src/context/AuthContext.jsx
import { createContext, useState, useContext } from "react";
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
const [token, setToken] = useState(() => localStorage.getItem("token"));
function login(novoToken) {
setToken(novoToken);
localStorage.setItem("token", novoToken);
}
function logout() {
setToken(null);
localStorage.removeItem("token");
}
return (
<AuthContext.Provider value={{ token, login, logout }}>
{children}
</AuthContext.Provider>
);
}
export function useAuth() {
return useContext(AuthContext);
}