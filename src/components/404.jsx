import { NavLink } from "react-router-dom";

const Erreur = () => {
        return (
        <div className="erreur">
            <div>404</div>
            <div>Oups! La page que vous demandez n'existe pas.</div>
            <div><NavLink to="/">Retourner sur la page d’accueil</NavLink></div>
        </div>
    );
}
export default Erreur