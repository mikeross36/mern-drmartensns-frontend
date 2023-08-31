import { useSelector } from "react-redux";
import Order from "../components/Order";

export default function UserOrders() {
  const userOrdersState = useSelector((state) => state.getUserOrders);
  const { userOrders } = userOrdersState;

  return (
    <section className="orders section">
      {!userOrders ? (
        <h2 className="section__title">no orders</h2>
      ) : (
        <>
          <h2 className="section__title">your orders</h2>
          <ul className="orders__container">
            {userOrders?.map((order) => {
              return <Order key={order._id} order={order} />;
            })}
          </ul>
        </>
      )}
    </section>
  );
}
