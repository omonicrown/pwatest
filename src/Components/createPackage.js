import React from 'react';
import {Form, Button,Jumbotron} from 'react-bootstrap';
import axios from 'axios';


class createPackage extends React.Component{
  constructor(props) {
    super(props)

    this.state ={
      name: '',
      description: '',
      packageDefination:''
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('https://senshost.com:8002/api/Package',this.state)
    .then(() => 
    window.location.href = "https://localhost:3004/show/").catch(error => {
      console.log(error)
    })
  }

  render() {
    const {name, description, packageDefination } = this.state
    return (
      <main class="col-md-8 ms-sm-auto col-lg-10 px-md-4 ">
        <div class="row mt-4 " align="middle" style={{padding:'20px 20px'}}> 
    <Form onSubmit={this.submitHandler}>
      <div class="col-md-5 col-lg-6 " style={{backgroundColor:'#b3b3ff',padding:'20px 20px'}}>
      <Form.Group controlId="packageName">
        <Form.Label>Package Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Package Name" name="name" value={name} onChange={this.changeHandler}/>
        <Form.Label>Package Defination</Form.Label>
        <Form.Control type="text" placeholder="Enter Package definition" name="packageDefination" value={packageDefination} onChange={this.changeHandler}/>
       
      </Form.Group>
      
      <Form.Group controlId="packageDescription">
        <Form.Label>Enter Package Description</Form.Label>
        <textarea class="form-control" id="exampleFormControlTextarea1" name="description" value={description} onChange={this.changeHandler} rows="3"></textarea>
      </Form.Group>
     <br/>
      <Button variant="primary" type="submit">
        Create
      </Button>
      </div>
    </Form>
    </div>

      </main>
       
    )
  }
}
export default createPackage;

