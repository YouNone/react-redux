import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { loginActions } from "../store/index";

const Header = () => {
  const isUserLoggedIn = useSelector((state) => state.login.isUserLoggedIn);
  const dispatchFunc = useDispatch();
  const signOutHandler = () => {
    dispatchFunc(loginActions.logOut());
  }
  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/">О нас</a>
          </li>
          {isUserLoggedIn && <li>
            <a href="/">Мои продажи</a>
          </li>}
          <li>
            <a href="/">Контакты</a>
          </li>
          <li>
            {isUserLoggedIn && <button onClick={signOutHandler}>Выйти</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
