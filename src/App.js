import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
const App = () =>{
return (
	<>
		<Login />
		
		

	</>
);
}

export default App;



// import './App.css';
// import {Routes,Route,Link} from 'react-router-dom';
// import {Navbar,Nav,Container,NavDropdown,FormControl,Form,Button} from 'react-bootstrap';
// import {Home} from './components/Home';
// import {About} from './components/About';
// import {Contact} from './components/Contact';
// function App() {
//   return (
    
//     <div className="App">
//       <>
//       <Navbar bg="light" expand="lg">
//   <Container fluid>
//     <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//     <Navbar.Toggle aria-controls="navbarScroll" />
//     <Navbar.Collapse id="navbarScroll">
//       <Nav
//         className="me-auto my-2 my-lg-0"
//         style={{ maxHeight: '100px' }}
//         navbarScroll
//         >
//         <Nav.Link as={Link} to="/Home">Home</Nav.Link>
//         <Nav.Link Link as={Link} to="/About">About</Nav.Link>
//         <Nav.Link Link as={Link} to="/Contact">Contact</Nav.Link>
//         <NavDropdown title="Link" id="navbarScrollingDropdown">
//           <NavDropdown.Item Link as={Link} to>Action</NavDropdown.Item>
//           <NavDropdown.Item Link as={Link} to>Another action</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item Link as={Link} to>
//             Something else here
//           </NavDropdown.Item>
//         </NavDropdown>
//         <Nav.Link href="#" disabled>
//           Link
//         </Nav.Link>
//       </Nav>
//       <Form className="d-flex">
//         <FormControl
//           type="search"
//           placeholder="Search"
//           className="me-2"
//           aria-label="Search"
//           />
//         <Button variant="outline-success">Search</Button>
//       </Form>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
// </>
// {/* <div>
//   <Routes>
//     <Route path="/Home" element={<Home/>}/>
//     <Route path="/About" element={<About/>}/>
//     <Route path="/Contact" element={<Contact/>}/>
//   </Routes>
// </div> */}
//     </div>
    
//   );
// };

// export default App;
