import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticleList from "../components/ArticleList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchArcticle } from "../http/articleAPI";


const Forum = observer(() => {
    const {article} = useContext(Context)

    useEffect(() => {
        fetchArcticle().then(data => article.setArticles(data))
    }, [])

    return(
        <Container>
            <Row className="mt-3">
                    <ArticleList/>
            </Row>
        </Container>
    );
});

export default Forum;