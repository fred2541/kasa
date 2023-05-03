const Banner = ({imgSource, title}) => {
    return (
        <div className="banner">
            <img src={imgSource} alt={title} />
            <h1>{title}</h1>
        </div>
    )
}
export default Banner