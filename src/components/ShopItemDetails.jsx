import { useState } from "react";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useDispatch } from "react-redux";
import { addItemToCartAction } from "../actions/cartAction";
import { useModal } from "../StateManager/ModalContext";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RatingStars from "./RatingStars";
import Button from "./Button";
import AddReview from "./AddReview";
import ShopItemReviews from "./ShopItemReviews";

const apiUrl = import.meta.env.VITE_API_URL;
const shopItemId = "shopItemId";

export default function ShopItemDetails() {
  const { itemId } = useParams();
  const footwearState = useSelector((state) => state.getAllFootwear);
  const { footwear } = footwearState;
  const item = footwear?.find(({ _id }) => _id === itemId);

  const {
    _id,
    coverImage,
    name,
    gender,
    category,
    price,
    material,
    soleHeight,
    details,
    care,
    rating,
  } = item;

  const [footwearRating, setFootwearRating] = useState(rating);

  const currentUser = useCurrentUser();
  const quantity = 1;
  const dispatch = useDispatch();
  const { setShowModal1 } = useModal();

  function handleAddItemToCart() {
    dispatch(addItemToCartAction(item, quantity));
    setShowModal1(true);
    toast.success("Item successfully added to cart!", { toastId: shopItemId });
  }

  return (
    <section className="details section">
      <h2 className="section__title">footwear details</h2>
      <main className="grid">
        <div className="details__description">
          <h4 className="details__description-title">{`About ${name}`}</h4>
          <p className="details__description-text">{details}</p>
        </div>
        <div className="details__container">
          <div className="details__image">
            <img
              src={`${apiUrl}/images/footwear/${coverImage}`}
              alt={`details for ${name}`}
              className="details__img"
            />
          </div>
          <article className="details__data">
            <div className="details__data-list">
              <span className="detals__price">Price: £{price.toFixed(2)}</span>
              <p>Gender: {gender}</p>
              <p>Category: {category}</p>
              <p>Material: {material}</p>
              <p>Sole Height: {soleHeight}</p>
              <RatingStars
                value={rating}
                starSize={15}
                colorInactive="#a9a9a9"
                colorActive="#FFBA5A"
                itemRating={footwearRating}
                setItemRating={setFootwearRating}
              />
              <p style={{ lineHeight: "1.5" }}>{care}</p>
            </div>
            {!currentUser && (
              <Link to="/login">
                <Button className="button-details" text="add review" />
              </Link>
            )}
            <span onClick={handleAddItemToCart}>
              <Button className="button-light" text="add to cart" />
            </span>
          </article>
        </div>
        {currentUser && <AddReview id={_id} name={name} />}
      </main>
      <ShopItemReviews id={_id} />
    </section>
  );
}
