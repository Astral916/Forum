import React, { useContext } from "react";
import { Context } from "../index";
import { ADMIN_ROUTE, FORUM_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import {Button} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      navigate(FORUM_ROUTE)
    }
    return(
    <div className="header">
          <a href={FORUM_ROUTE} className="ahref">About</a>
          {user.isAuth ?
          <div className="right">
            <Button className="headbutton" variant="outline-light"
             onClick={() => navigate(ADMIN_ROUTE)}>Добавить...</Button>
            <Button className="right headbutton" variant="outline-light"
             onClick={() => logOut()}>Выйти</Button>
          </div>
          :
          <div className="right">
            <Button className="headbutton" variant="outline-light"
            onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
          </div>}
      </div>
    );
});

export default NavBar;