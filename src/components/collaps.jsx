import { useState } from "react";


const Collaps = ({size = 'large', collapsed = false, title, contenu = false}) => {
    const [activeCollaps, setactiveCollaps] = useState(collapsed);

    let className = [];
    className.push(activeCollaps ? 'activeCollaps' : '');
    className.push('collaps');

    return (
      <div className={'collapsBox ' + size}>
        <button type="button" className={className.join(" ")} onClick={() => activeCollaps ? setactiveCollaps(false) : setactiveCollaps(true)}>
          {title}
        </button>
        <div className={activeCollaps ? 'content active' : 'content unactive'}>
          <p>{contenu}</p>
        </div>
      </div>
    );
}
export default Collaps