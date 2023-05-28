import React, { useContext, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {useNavigate} from "react-router-dom"
import { NavLink, useLocation } from "react-router-dom";
import { FORUM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const click = async () => {
        try {
        let data;
        if(isLogin){
            data = await login(email, password);
        } else {
            data = await registration(email, password);
        }
        user.setUser(user)
        user.setIsAuth(true)
        navigate(FORUM_ROUTE)
    } catch (e) {
        alert(e.response.data.message)
    }
    }

    return(
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight-54}}>
            <div style={{width: 600}} className="p-5">
                <h2 className="reg">
                {isLogin ? 'Вход' : 'Регистрация'} </h2>
                <Form>
                    <Form.Control
                    className="form"
                    placeholder="Введите ваш email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                    className="form"
                    placeholder="Введите ваш пароль..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    />
                    {isLogin ?
                        <div className="link">
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                        </div>
                        :
                        <div className="mt-3" style={{fontFamily:"Comic Sans MS", fontSize: 17}}>
                         Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>   
                        </div>
                    }
                        <Button className="button"
                        variant="outline-dark"
                        onClick={click}>
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                </Form>
            </div>
        </Container>
    );
});

export default Auth;