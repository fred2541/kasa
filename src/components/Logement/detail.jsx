import { useEffect, useState } from "react";

const Detail = ({ data }) => {
  // const result = Object.values(data);

  const [etoile, setEtoile] = useState([]);

  useEffect(() => {
    const makeEtoile = (number) => {
      setEtoile([]);
      for (let index = 0; index < 5; index++) {
        index < number
          ? setEtoile((arr) => [...arr, "etoileFull.svg"])
          : setEtoile((arr) => [...arr, "etoileEmpty.svg"]);
      }
    };
    makeEtoile(data.rating);
  }, [data.rating]);

  return (
    <div className="containerDetail">
      <div className="location">
        <div>{data.title}</div>
        <div>{data.location}</div>
        <div>
          {data.tags.map((tags) => (
            <div key={tags}>{tags}</div>
          ))}
        </div>
      </div>
      <div className="proprio">
        <div>
          <div>{data.host.name}</div>
          <div>
            <img src={data.host.picture} alt={data.host.name} />
          </div>
        </div>
        <div>
          {etoile.map((image, index) => (
            <img src={"../images/icons/" + image} key={index} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Detail;
