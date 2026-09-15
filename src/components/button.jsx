function Button({ children, variant = "primario", onClick }) {
  const estilos = {
    primario: "bg-[var(--color-marca-2)] text-white hover:bg-[var(--color-marca-3)] transition-colors",
    destaque: "bg-[var(--color-marca-3)] text-white hover:bg-[var(--color-marca-2)] transition-colors",
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
