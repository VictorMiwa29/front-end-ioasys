import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AuthContext } from '../../context/Auth';
import { BooksRequest } from '../../services/api';
import CardBook from '../CardBooks';

function LayoutHome() {
  const { token, nameUser } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(0);

  async function getBooks() {
    try {
      const { data } = await BooksRequest(token, page);
      setPage(data.page);
      setPageTotal(Math.round(data.totalPages));
      return setBooks(data.data);
    } catch (error) {
      return console.log(error);
    }
  }

  function nextPage() {
    if (page === pageTotal) {
      return setPage(pageTotal);
    }
    return setPage(page + 1);
  }

  function backPage() {
    if (page === 1) {
      return setPage(1);
    }
    return setPage(page - 1);
  }

  useEffect(() => {
    getBooks();
  }, [page]);

  return (
    <Container>
      <Container className="d-flex justify-content-between">
        <Container className="d-flex pt-4" id="ioasys">
          <p style={{ fontSize: '40px', fontWeight: 'bold' }}>ioasys</p>
          <p style={{ fontSize: '36px' }} className="ms-3 mt-1">Books</p>
        </Container>
        <Container className="d-flex justify-content-end align-items-center">
          <p style={{ fontSize: '12px' }} className="mt-4" id="nome">Bem vindo,&nbsp;</p>
          <p style={{ fontSize: '12px', fontWeight: 'bold' }} className="mt-4" id="nome">{nameUser}</p>
          <Button
            style={{
              borderRadius: '50%', height: '35px', width: '35px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}
            className="ms-4"
          >
            <FiLogOut />
          </Button>
        </Container>
      </Container>
      <Row className="px-2">
        { books.map((book) => (
          <CardBook
            key={book.id}
            title={book.title}
            authors={book.authors}
            pages={book.pageCount}
            publisher={book.publisher}
            published={book.published}
            image={book.imageUrl}
          />
        )) }
      </Row>
      <Container>
        <Container className="d-flex justify-content-end align-items-center" id="paginas">
          <p style={{ fontSize: '12px' }} className="mt-4" id="textoPaginas">{`Página ${page} de ${pageTotal}`}</p>
          <Button
            style={{
              borderRadius: '50%', height: '35px', width: '35px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}
            className="ms-4"
            onClick={() => backPage()}
            id="backButton"
          >
            <IoIosArrowBack />
          </Button>
          <Button
            style={{
              borderRadius: '50%', height: '35px', width: '35px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}
            className="ms-3"
            onClick={() => nextPage()}
          >
            <IoIosArrowForward />
          </Button>
        </Container>
      </Container>
    </Container>
  );
}

export default LayoutHome;
