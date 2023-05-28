import React, { useEffect, useState } from "react";
import { Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import { fetchOneArcticle } from "../http/articleAPI";
import '../styles/App.css';

const Article = () => {
    const [article, setArticles] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneArcticle(id).then(data => setArticles(data))
    },[])
    return(
        <div className="Article">
            <div className="arImage">
                <img className="imagearticle" src={'http://localhost:8080/' + article.img}/>
            </div> 
            <div className="arName">
                <h2>{article.name}</h2>
            </div>
            <center>
            <p className="Content">{article.content}</p>
            </center>
        </div>
    );
};

export default Article;