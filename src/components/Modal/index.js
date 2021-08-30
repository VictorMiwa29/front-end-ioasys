import React from 'react';
import {
  Container, Row, Col, Modal, Image,
} from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { ImQuotesLeft } from 'react-icons/im';

export default function ModalBooks({
  showModal, setShowModal, detailsBook, authors,
}) {
  return (
    <Modal
      size="lg"
      show={showModal}
      onHide={() => setShowModal(false)}
      centered
      style={{ marginTop: '25px' }}
      id="modal"
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
                  <p style={{ fontSize: '12px', color: '#999999', marginBottom: '5px' }}>{detailsBook.pages}</p>
                </Container>
                <Container className="d-flex justify-content-between p-0">
                  <p style={{ fontSize: '12px', marginBottom: '5px' }}>Editora</p>
                  <p style={{ fontSize: '12px', color: '#999999', marginBottom: '5px' }}>{detailsBook.publisher}</p>
                </Container>
                <Container className="d-flex justify-content-between p-0">
                  <p style={{ fontSize: '12px', marginBottom: '5px' }}>Publicação</p>
                  <p style={{ fontSize: '12px', color: '#999999', marginBottom: '5px' }}>{detailsBook.published}</p>
                </Container>
                <Container className="d-flex justify-content-between p-0">
                  <p style={{ fontSize: '12px', marginBottom: '5px' }}>Idioma</p>
                  <p style={{ fontSize: '12px', color: '#999999', marginBottom: '5px' }}>{detailsBook.language}</p>
                </Container>
                <Container className="d-flex justify-content-between p-0">
                  <p style={{ fontSize: '12px', marginBottom: '5px' }}>Título Original</p>
                  <p style={{ fontSize: '12px', color: '#999999', marginBottom: '5px' }}>{detailsBook.title}</p>
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
                <p style={{ fontSize: '12px', color: '#999999' }}>
                  <ImQuotesLeft style={{ fontSize: '20px', marginRight: '5px', paddingBottom: '2px' }} />
                  {detailsBook.description}
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </Modal.Header>
    </Modal>
  );
}

ModalBooks.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  detailsBook: PropTypes.objectOf(PropTypes.string).isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
