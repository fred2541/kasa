const { NavLink } = require("react-router-dom")

const Cards = ({dataAppart}) => {
    // console.log(dataAppart);
    return (
        <NavLink>
            <article>
                <img src={dataAppart.cover} alt=""></img>
                <figcaption>{dataAppart.title}</figcaption>
            </article>
        </NavLink>
    )
}
export default Cards