import FilterChip from "./FilterChip";
function FilterBar({ filtroAtual, onFiltroChange }) {
    return (
        <div className="flex gap-2 mb-4">
            <FilterChip
                label="Todas"
                ativo={filtroAtual === "todas"}
                onClick={() => onFiltroChange("todas")}
            />
            <FilterChip
                label="Push"
                ativo={filtroAtual === "push"}
                onClick={() => onFiltroChange("push")}
            />
            <FilterChip
                label="E-mail"
                ativo={filtroAtual === "email"}
                onClick={() => onFiltroChange("email")}
            />
        </div>
    );
}
export default FilterBar;