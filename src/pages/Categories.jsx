import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllCategoriesAction,
  getCategoryAction,
} from "../actions/categoryActions";
import Button from "../components/Button";
import Spinner from "../components/Spinner";

export default function Categories() {
  const categoriesState = useSelector((state) => state.getAllCategories);
  const { categories, loading } = categoriesState;

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getAllCategoriesAction());
    },
    [dispatch]
  );

  return (
    <section className="categories section">
      <h3 className="section__title">choose our footwear by categories</h3>
      {loading ? (
        <Spinner />
      ) : (
        <ul className="categories__wrapper grid">
          {categories?.map((category) => {
            const { _id, coverImage, name, description } = category;
            return (
              <li className="category__card" key={_id}>
                <div className="card__image">
                  <img
                    src={`/images/categories/${coverImage}`}
                    alt="category pic"
                    className="category__card-img"
                  />
                </div>
                <div className="category__card-body">
                  <h4 className="category__card-title">{name}</h4>
                  <p className="category__description">{description}</p>
                </div>
                <div className="card__footer">
                  <Link
                    to="/category"
                    onClick={() => dispatch(getCategoryAction(_id))}
                  >
                    <Button
                      className="button-light"
                      text={`Footwear of ${name}`}
                    />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
