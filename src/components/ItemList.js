import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {products.map((prod) => (
            <div className="column is-3">
              <Item key={prod.id} {...prod} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemList;
