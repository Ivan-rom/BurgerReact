import classNames from "classnames";
import { Container } from "../Container/Container";
import style from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  CategoryRequestAsync,
  changeCategory,
} from "../../store/category/categorySlice";
import { useEffect } from "react";
import { API_URI } from "../../const";

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CategoryRequestAsync("max"));
  }, []);

  return (
    <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>
          {category.map((item, i) => (
            <li className={style.item} key={item.title}>
              <button
                className={classNames(
                  style.button,
                  style.button_burger,
                  activeCategory === i ? style.button_active : ""
                )}
                style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({ indexCategory: i }));
                }}
              >
                {item.rus}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
