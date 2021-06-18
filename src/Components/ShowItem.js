export function ShowItem({ item }) {
  return (
    <div key={item.id} className="card mg-1">
      <h2>{item.name}</h2>
      <h3>Price: ₹{item.price}</h3>
    </div>
  );
}
