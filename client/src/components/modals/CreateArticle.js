import React, { useContext, useState, } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { createArticle} from "../../http/articleAPI";

const CreateAricle = observer(({show,onHide}) => {
    
    const {article} = useContext(Context)
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [file, setFile] = useState(null)

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addArticle = () => {
    const formData = new FormData()
    formData.append('name',name)
    formData.append('content',content)
    formData.append('img',file)
    createArticle(formData).then(data => onHide())
  }

    return(
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новую статью
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
            value={name}
              className="mt-3"
              onChange={e => setName(e.target.value)}
              placeholder="Введите название статьи"
            />
            <Form.Control
            value={content}
              className="mt-3"
              onChange={e => setContent(e.target.value)}
              placeholder="Введите статью"
            />
            <Form.Control
              className="mt-3"
              type="file"
              onChange={selectFile}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer className="modalfooter">
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addArticle}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
});

export default CreateAricle;