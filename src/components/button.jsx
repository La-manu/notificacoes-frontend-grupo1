function Button({ children, variant = "primario", onClick }) {
  const estilos = {
    // Bem mais simples e fácil de ler:
    primario: "bg-marca-2 text-white hover:bg-marca-3 transition-colors",
    destaque: "bg-marca-3 text-white hover:bg-marca-2 transition-colors",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold ${estilos[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
