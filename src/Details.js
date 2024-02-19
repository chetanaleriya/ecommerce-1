import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'; 
import logo from "./logo.svg"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
function Details()
{
  
  const location = useLocation();
  const carddata = location.state;
  const [carddata1,setCarddata]=useState({})
  useEffect(()=>
  {
    console.log(carddata.name)
   fetch("https://fakestoreapi.com/products/"+carddata.name).then((result)=>{
       // console.log(result)
       result.json().then((data)=>
       {
        // let carddata2 = data.find(element => element.pid == carddata.name);
        //    // console.log(restaurant)
          
            setCarddata(data)
       })
    })
  },[])
      return(
        <div>
         <MDBCard >
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={carddata1.image} width="300px"/>
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle style={{color:"red"}}>{carddata1.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"blue"}}>{carddata1.price*80} RS</MDBCardTitle>
            <MDBCardText>
            {carddata1.description}
            </MDBCardText>
            <MDBCardTitle style={{color:"blue"}}>{carddata1.category}</MDBCardTitle>
            {/* <MDBCardTitle style={{color:"blue"}}>Rating </MDBCardTitle>
            <MDBCardTitle style={{color:"blue"}}>Rate : {carddata1.rating.rate}</MDBCardTitle>
            <MDBCardTitle style={{color:"blue"}}>Count : {carddata1.rating.count}</MDBCardTitle>
            {console.log(carddata1.rating.count)} */}
           
            
            <Button variant="primary" >Buy Now</Button>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
        </div>
      )
}
export default Details