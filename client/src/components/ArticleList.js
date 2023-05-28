import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import ArticleItem from "./ArticleItem";
import '../styles/App.css';

const ArticleList = observer(() => {
    const {article} = useContext(Context)
    return(
        <div className="arList">
            {article.articles.map((article) =>
             <ArticleItem key={article.id} article={article}/>
            )}
        </div>
    );
});

export default ArticleList;