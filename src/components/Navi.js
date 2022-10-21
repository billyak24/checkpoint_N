import {Navbar,Nav, Container ,Form} from 'react-bootstrap';
import ReactStars from 'react-stars'
import React from 'react';
import Add from './Add';

const Navi = ( {setSearch, rateSearching,setRateSearching, setMovies,movies}) => {
   
   
    
    
  

  return (
    <div>
              <Navbar bg="primary" variant="dark">
        <Container>
       
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Trailer</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            
              onChange={(e)=> setSearch(e.target.value)}

            />
          </Form>
      
    <Add setMovies={setMovies} movies={movies}/>



    <div style={{  marginRight:'-80px', marginLeft:'50px'}}>
    <ReactStars
  count={5}
  onChange={(e) => 
    setRateSearching(e)}
  half={false}
  size={24}
  color2={'#ffd700'} 
  value={rateSearching}
   /></div>
        </Container>
      </Navbar>

      
        




    </div>
  )
}

export default Navi