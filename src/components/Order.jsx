import PropTypes from "prop-types";

const apiUrl = import.meta.env.VITE_API_URL;

export default function Order({ order }) {
  return (
    <li className="order__card">
      <div className="order__card-content">
        <h4>order items</h4>
        {order?.orderItems?.map((item) => {
          return (
            <article className="order__item" key={item.id}>
              <img
                src={`${apiUrl}/images/footwear/${item.image}`}
                alt="order item pic"
              />
              <p className="order__item-name">{item.name}</p>
              <p>price: £{item.price.toFixed(2)}</p>
              <p>quantity: {item.quantity}</p>
              <p>total: £{(item.price * item.quantity).toFixed(2)}</p>
            </article>
          );
        })}
      </div>
      <div className="order__info">
        <p>Address</p>
        <div className="order__data">
          <span>Street: {order.shippingAddress.street}</span>
          <span>City: {order.shippingAddress.city}</span>
          <span>Postal Code: {order.shippingAddress.postalCode}</span>
        </div>
      </div>
      <div className="order__info">
        <p>Order Info</p>
        <div className="order__data">
          <span>Amount: £{order.orderAmount.toFixed(2)}</span>
          <span>Date: {order.createdAt.substring(0, 10)}</span>
          <span>Transaction: {order.transactionId}</span>
          <span>Order ID: {order._id}</span>
        </div>
      </div>
    </li>
  );
}

Order.propTypes = {
  order: PropTypes.object,
};
