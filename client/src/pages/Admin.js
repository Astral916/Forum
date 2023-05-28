import React, {useState, } from "react";
import { Button, Container } from "react-bootstrap";
import CreateArticle from "../components/modals/CreateArticle"

const Admin = () => {
    const [articleVisible, setArticleVisible] = useState(false)
    return(
        <Container className="d-flex flex-column">
        <Button className="button" onClick={() => setArticleVisible(true)}>
            Добавить статью
        </Button>
        <CreateArticle  show={articleVisible} onHide ={() => setArticleVisible (false)}/>
        </Container>
    );
};
export default Admin;