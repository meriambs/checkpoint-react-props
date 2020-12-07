
import ProfilCompoment from './compoment/profile/profilCompoment';
import 'bootstrap/dist/css/bootstrap.min.css';

import{Navbar,Nav,Form,FormControl,Button,} from 'react-bootstrap';
import { BsFillHouseFill } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";

import { SiGithub } from "react-icons/si";
import { DiJsBadge }from "react-icons/di";


// const photot={
// height: '225px',

// borderRadius: '109px',
//  marginTop: "29px",
//   marginBottom: "39px",
// }
const apa ={
  backgroundColor: "#f5f5da",
}
 const namee={
       display: "flex",
    justifyContent: "center",
    marginTop: "77px",
 
}
const Appheader= {
  backgroundColor:"#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignDtems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
}
const iconpart={
    display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#515457",
  boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.12)",
  boxSizing: "border-box",
  width: "100%",
  textAlign: "left",
  font: "bold 16px sans-serif",
  padding: "55px 50px",
  marginTop: "80px",
}
const mailpart={
  display: "flex",
  flexWrap: "nowrap",
  color: "white",
}
const badg={ marginRight: "14px" 
}






function App() {
  return (
     <div className="App" style={apa} >
    <div className="navy">
      
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Profil</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">First Articl</Nav.Link>
      <Nav.Link href="#pricing">Second Articl</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
  </div>
  <div style={namee} >
 
    <ProfilCompoment  name="Meriam" bio="doing many things and nothing"  profession="ingenieur en biologie industrielle">
   
     <img src="./img/photo-de-profil.jpg"     />
  
    </ProfilCompoment>
    </div>
     <body>
  

   <div style={iconpart} >
     <div style={mailpart} >
        <div  style={badg}  >
       <BsBriefcase ></BsBriefcase>
       </div>
      <h5  >bensalah.meriem0@gmail.com</h5>
      </div>
      <div style={mailpart}   >
        <div  style={badg}  >
          <a  href="https://github.com/meriambs" >
         <SiGithub/>
         </a>
         </div>
      <h5  >gitpart</h5>
      </div>
      <div style={mailpart}  >
        <div  style={badg}  >
          <a  href="https://www.codewars.com/users/MeriambenS">
        <DiJsBadge/>
        </a>
        </div>
      <h5  >codewars</h5>
      </div>
     
  
   </div>
   </body>

  </div>
  
  
    
  );
}

export default App;
