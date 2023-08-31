import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCartAction } from "../actions/cartAction";
import { toast } from "react-toastify";
import { useModal } from "../StateManager/ModalContext";
import PropTypes from "prop-types";
import RatingStars from "./RatingStars";
import Button from "./Button";

const apiUrl = import.meta.env.VITE_API_URL;
const shopItemId = "shopItemId";

export default function ShopItem({ item }) {
  const { coverImage, name, price, material, rating, _id } = item;
  const [footwearRating, setFootwearRating] = useState(rating);
  const [imageClicked, setImageClicked] = useState(false);
  const quantity = 1;
  const { setShowModal1 } = useModal();

  const dispatch = useDispatch();

  function handleAddItemToCart() {
    dispatch(addItemToCartAction(item, quantity));
    setShowModal1(true);
    toast.success("Item successfully added to cart!", { toastId: shopItemId });
  }

  function onImageClick() {
    setImageClicked(!imageClicked);
  }

  return (
    <li className="shop__item">
      <div className="image__wrapper">
        <h3 className="image__wrapper-title">martensns</h3>
        <img
          onClick={onImageClick}
          src={`${apiUrl}/images/footwear/${coverImage}`}
          alt="footwear pic"
          className={`shop__item-img ${imageClicked && "image-click"}`}
        />
      </div>
      <p className="shop__item-name">{name}</p>
      <h4 className="shop__item-price">£{price.toFixed(2)}</h4>
      <p className="shop__item-name">{material}</p>
      <Link to={`/footwear/${_id}`}>
        <Button className="button-details" text="details" />
      </Link>
      <RatingStars
        value={rating}
        starSize={15}
        colorInactive="#a9a9a9"
        colorActive="#FFBA5A"
        itemRating={footwearRating}
        setItemRating={setFootwearRating}
      />
      <span onClick={handleAddItemToCart}>
        <Button className="button-light" text="add to cart" />
      </span>
    </li>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object,
  coverImage: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  material: PropTypes.string,
  rating: PropTypes.number,
  setShowModal1: PropTypes.func,
};
