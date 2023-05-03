const Banner = ({imgSource, title, about}) => {
    return (
        <div className="banner">
            <img src={imgSource} alt={title} className={`${about ? "about" : ""}`}/>
            {typeof(title) !== 'undefined' && <h1>{title}</h1>}
        </div>
    )
}
export default Banner