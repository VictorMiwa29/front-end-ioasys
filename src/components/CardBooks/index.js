import React from 'react';
import {
  Container, Col, Card, CardImg,
} from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function CardBook({
  title, authors, pages, publisher, published, image,
}) {
  return (
    <Col lg={3} className="pt-2 p-2">
      <Card style={{ padding: '15px' }}>
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
};
