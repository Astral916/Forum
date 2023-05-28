import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useNavigate} from "react-router-dom"
import { ARTICLE_ROUTE } from "../utils/consts";

const ArticleItem = ({article}) => {
    const navigate = useNavigate()
    return(
        <div className="arItem" onClick={() => navigate(ARTICLE_ROUTE + '/' + article.id)}>
            <div>
                <div>
                <img className="image" src={'http://localhost:8080/' + article.img}/>
                </div>
                    <div className="Arname">{article.name}</div>
            </div>
        </div>
    );
};

export default ArticleItem;