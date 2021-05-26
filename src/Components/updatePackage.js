import React from 'react';
import {Nav,Navbar,NavDropdown,Form, Button,Jumbotron} from 'react-bootstrap';



class UpdatePackage extends React.Component{
  constructor(props) {
    super(props)
    
    this.changeHandler = this.changeHandler.bind(this);
    

    this.state ={
      name: '',
      description: '',
      packageDefination:'',
      id : '',
      creationDate:''
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = async (e) => {
    e.preventDefault()
    this.state.name = document.getElementById('pn').value
    this.state.description = document.getElementById('pdes').value
    this.state.packageDefination = document.getElementById('pdef').value
    this.state.creationDate = document.getElementById('pcd').value
    this.state.id = document.getElementById('pid').value
    const url2 = "http://senshost.com:8002/api/Package";
      await fetch(`${url2}/${this.state.id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify({
          name: this.state.name,
          description: this.state.description,
          packageDefination:this.state.packageDefination,
          creationDate:this.state.creationDate,
          id:this.state.id,
        })
      })
      .then(res => res.json())
      .then(() => window.location.href = "http://localhost:3004/show/")
    
  }

  render() {
    const { state } = this.props.location

    var curr =new Date(state.creationDate);
    var date2 = curr.toISOString().substr(0,10);
    return (
      <main class="col-md-8 ms-sm-auto col-lg-10 px-md-4 ">
        <div class="row mt-4 " align="middle" style={{padding:'20px 20px'}}> 
    <Form onSubmit={this.submitHandler}>
      <div class="col-md-5 col-lg-4 " style={{backgroundColor:'#b3b3ff',padding:'20px 20px'}}>
      <Form.Group controlId="packageName">
        <Form.Label>Update Package Name</Form.Label>
        <Form.Control type="text" id="pn" defaultValue={state.name} onChange={this.changeHandler}/>
        <Form.Label>Update Package Defination</Form.Label>
        <Form.Control type="text" id="pdef" defaultValue={state.packageDefination} onChange={this.changeHandler}/>
        
        <Form.Control type="hidden" id="pid" defaultValue={state.id} onChange={this.changeHandler}/>
        <Form.Label>Update Package Creation Date</Form.Label>
        <Form.Control type="date" id="pcd" defaultValue={date2} onChange={this.changeHandler}/>
       
      </Form.Group>
      
      <Form.Group controlId="packageDescription">
        <Form.Label>Enter Package Description</Form.Label>
        <textarea class="form-control" id="pdes" defaultValue={state.description} onChange={this.changeHandler} rows="3"></textarea>
      </Form.Group>
     <br/>
      <Button variant="primary" type="submit">
        Update
      </Button>
      </div>
    </Form>
    </div>

    
      </main>

      
    
           
    )
  }
}
export default UpdatePackage;

