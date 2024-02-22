import "../styles/ItemDetail.css"

const ItemDetail = ({id, title, price, description, category, image, rating }) => {
  return (
    <section className="section">
    <div className="container"> 
        <div className="columns">
            <div className="column">
                <div className="card is-horizontal shadow-md transform is-duration-300 hover-shadow-xl hover-translate-y">
                    <div className="card-image">
                        <figure className="image">
                            <img src= {image} alt={category}/>
                        </figure>
                    </div>
                    
                    <div className="card-content p-0 is-flex is-flex-direction-column">
                        <div className="content p-5 has-text-grey-light">
                            <h3>{title}</h3>
                        <p className="is-size-6 has-text-weight-normal">{description}</p>
                        </div>
                        <div className="content p-5 has-background-info-light">
                            <div className="columns is-flex-direction-column is-align-items-center">
                                <div className="column">
                                    <div className="is-full">
                                        <h3 className="mb-1">${price}</h3>
                                    </div>
                                </div>
                                <div className="column is-full">
                                    <button className="button is-primary is-medium is-fullwidth has-text-weight-semibold">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default ItemDetail;






