export function ShowItem({ item }) {
    return (
      <div
        key={item.id}
        className="card"
      >
        <h2>{item.name}</h2>
        <h2>₹{item.price}</h2>
      </div>
    );
  }