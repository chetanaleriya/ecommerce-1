import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom"

function Product()
{
    const[apidata,setapidata]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((result)=>{
             result.json().then((data)=>{
                setapidata(data)

            })
        })
    },[])

    const navigate=useNavigate();
    const handleClick=(pid)=>
    {
            const data={name:pid}
            navigate("/details",{state:data})
    }
    return(
        <div>

<MDBRow className='row-cols-1 row-cols-md-3 g-4'>
{
            apidata.map((item)=>
      <MDBCol>
        
            <MDBCard className='h-100'>
            <center><MDBCardImage  src={item.image} width="100px" height="150px" /></center>
            <MDBCardBody>
              <MDBCardTitle>{item.title}</MDBCardTitle>
              <MDBCardTitle>{item.price*80} Rs</MDBCardTitle>
              <MDBCardText>{item.description.substring(0,100)} </MDBCardText>
             <center> <MDBBtn varient="primary" onClick={()=>handleClick(item.id)}>View Details {item.id}</MDBBtn></center>
            </MDBCardBody>
          </MDBCard> 
           
      </MDBCol>
      
      )
        }
     
    </MDBRow>
    </div>
    )
}
export default Product