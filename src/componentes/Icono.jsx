import estilos from '../css/Vinculo.module.css'

export function ListaIcono() {
    return (
        <div className={estilos.icono}>
            <img src="https://img.icons8.com/pastel-glyph/64/ingredients-list--v1.png" alt="Lista" />
        </div>
    )
}

export function NuevaMetaIcono() {
    return (
        <div className={estilos.icono}>
            <img src="https://img.icons8.com/?size=100&id=qU1Kwly6Z3ub&format=png&color=000000" alt="Nueva" />
        </div>
    )
}

export function IconoUser() {
    return (
        <img width="30" height="30" src="https://img.icons8.com/ultraviolet/40/user.png" alt="user" />
    );
}
