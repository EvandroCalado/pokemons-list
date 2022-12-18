import "./Card.css"

const Card = ({ name, gif, img, id, types }) => {
  return (
    
      <div className="card">
        <div className="header">
          <button className="icon">🖤</button>
          <h2>#{id}</h2>
        </div>
        <div className="image">
          <img src={img} alt={name} />
        </div>
        <div className="footer">
          <div>
            <h3>{name}</h3>
            <div className="types">
              {types.map((type, index) => {
                return (
                  <div className="types" key={index}>
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
          <img src={gif} alt={name} />
        </div>
      </div>
    

    // <div>
    //   <div>{name}</div>
    //   <div># {id}</div>
    //   <img src={img} alt={name} />
    //   <img src={gif} alt={name} />
    //   {types.map((type, index) => {
    //     return <div key={index}>{type.type.name}</div>
    //   })}
    // </div>
  );
};

export default Card;
