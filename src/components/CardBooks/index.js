import React, { useState, useContext } from 'react';
import {
  Container, Row, Col, Card, CardImg, Modal, Image,
} from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { AuthContext } from '../../context/Auth';
import { BookIdRequest } from '../../services/api';

function CardBook({
  title, authors, pages, publisher, published, image, id,
}) {
  const { token } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [detailsBook, setDetailsBook] = useState({});

  async function showDetails(idBook) {
    try {
      const { data } = await BookIdRequest(token, idBook);
      console.log(data);
      setDetailsBook(data);
      return setShowModal(true);
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <>
      <Col lg={3} className="pt-2 p-2">
        <Card style={{ padding: '15px', cursor: 'pointer' }} onClick={() => showDetails(id)}>
          <CardImg variant="left" src={image} style={{ width: '81px', height: '122px' }} />
          <Container className="d-flex flex-column justify-content-between ps-3 g-0">
            <Container>
              <Card.Title style={{ fontSize: '14px' }}>{title}</Card.Title>
              <Card.Subtitle style={{ fontSize: '12px', color: '#AB2680' }}>{authors[0]}</Card.Subtitle>
            </Container>
            <Container>
              <Card.Text style={{ fontSize: '12px', marginBottom: '0' }}>{`${pages} páginas`}</Card.Text>
              <Card.Text style={{ fontSize: '12px', marginBottom: '0' }}>{`Editora ${publisher}`}</Card.Text>
              <Card.Text style={{ fontSize: '12px', marginBottom: '0' }}>{`Publicado em ${published}`}</Card.Text>
            </Container>
          </Container>
        </Card>
      </Col>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        style={{ marginTop: '25px' }}
      >
        <Modal.Header closeButton>
          <Container>
            <Row className="p-1" id="rowDetails">
              <Col className="p-0">
                <Image src={detailsBook.imageUrl} id="imageBookDetail" />
              </Col>
              <Col className="d-flex flex-column justify-content-between">
                <p style={{ fontSize: '28px', marginBottom: '0' }}>{detailsBook.title}</p>
                <p style={{ fontSize: '12px', color: '#AB2680' }}>{authors.map((author) => (`${author}, `))}</p>
                <Container style={{ paddingLeft: '0px' }}>
                  <p style={{ fontSize: '12px' }}>INFORMAÇÕES</p>
                  <Container className="d-flex justify-content-between p-0">
                    <p style={{ fontSize: '12px', marginBottom: '5px' }}>Páginas</p>
                    <p style={{ fontSize: '12px', color: '#999999', marginBottom: '5px' }}>{pages}</p>
                  </Container>
                  <Container className="d-flex justify-content-between p-0">
                    <p style={{ fontSize: '12px', marginBottom: '5px' }}>Editora</p>
                    <p style={{ fontSize: '12px', color: '#999999', marginBottom: '5px' }}>{publisher}</p>
                  </Container>
                  <Container className="d-flex justify-content-between p-0">
                    <p style={{ fontSize: '12px', marginBottom: '5px' }}>Publicação</p>
                    <p style={{ fontSize: '12px', color: '#999999', marginBottom: '5px' }}>{published}</p>
                  </Container>
                  <Container className="d-flex justify-content-between p-0">
                    <p style={{ fontSize: '12px', marginBottom: '5px' }}>Idioma</p>
                    <p style={{ fontSize: '12px', color: '#999999', marginBottom: '5px' }}>{detailsBook.language}</p>
                  </Container>
                  <Container className="d-flex justify-content-between p-0">
                    <p style={{ fontSize: '12px', marginBottom: '5px' }}>Título Original</p>
                    <p style={{ fontSize: '12px', color: '#999999', marginBottom: '5px' }}>{title}</p>
                  </Container>
                  <Container className="d-flex justify-content-between p-0">
                    <p style={{ fontSize: '12px', marginBottom: '5px' }}>ISBN-10</p>
                    <p style={{ fontSize: '12px', color: '#999999', marginBottom: '5px' }}>{detailsBook.isbn10}</p>
                  </Container>
                  <Container className="d-flex justify-content-between p-0">
                    <p style={{ fontSize: '12px' }}>ISBN-13</p>
                    <p style={{ fontSize: '12px', color: '#999999' }}>{detailsBook.isbn13}</p>
                  </Container>
                </Container>
                <Container style={{ paddingLeft: '0px' }}>
                  <p style={{ fontSize: '12px' }}>RESENHA DA EDITORA</p>
                  <blockquote className="blockquote">
                    <p style={{ fontSize: '12px', color: '#999999' }}>{detailsBook.description}</p>
                  </blockquote>
                </Container>
              </Col>
            </Row>
          </Container>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default CardBook;

CardBook.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  pages: PropTypes.number.isRequired,
  publisher: PropTypes.string.isRequired,
  published: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
