import React from 'react';
import axios from 'axios';
import {Nav,Navbar,Form, Button,Jumbotron} from 'react-bootstrap';



class CreateSubscription extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      name: '',
      packageId: '',
      endDate:'',
      startDate: '',
      creationDate:''
    }
  }

  state = {
    loading: true,
    packages: null,
    
};
submitHandler = e => {
  e.preventDefault()
  this.state.name = document.getElementById('dname').value
  this.state.packageId = document.getElementById('did').value
  this.state.endDate = document.getElementById('ddate').value
  this.state.startDate = document.getElementById('sdate').value
  this.state.creationDate = document.getElementById('cdate').value
  console.log(this.state)
  axios.post('http://senshost.com:8002/api/Subscription',this.state)
  .then(() => 
  window.location.href = "http://localhost:3004/subscription").catch(error => {
    console.log(error)
  })
}

  async componentDidMount(){
      
    const url = "http://senshost.com:8002/api/Package/PageNumber=1/PageSize=10";
    const url2 = "http://senshost.com:8002/api/Package/";
    const response = await fetch(url);
    const data2 = await response.json();
    //console.log(data2)
 
    this.setState({packages: data2,loading:false})
   
 }
  
  render(){
    var date = new Date();
    var today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    const {subName, subDate } = this.state
    return (
      <main class="col-md-8 ms-sm-auto col-lg-10 px-md-4 ">
          {this.state.loading || !this.state.packages?(<div class="text-center" style={{padding:'300px 100px'}}><div class="spinner-border" role="status"><span class="sr-only"></span></div></div>)  : (
        <div class="row mt-4 " align="middle" style={{padding:'20px 20px'}}> 
    <Form onSubmit={this.submitHandler}>
      <div class="col-md-5 col-lg-6 " style={{backgroundColor:'#b3b3ff',padding:'20px 20px'}}>
      <Form.Group controlId="packageName">
        <Form.Label>Subscription Name</Form.Label>
        <Form.Control id="dname" type="text" placeholder="Enter Subscription Name" name="name" value={subName} onChange={this.changeHandler}/>
        <Form.Control id="sdate" type="hidden"  name="sdate" value={today} onChange={this.changeHandler}/>
        <Form.Control id="cdate" type="hidden"  name="cdate" value={today} onChange={this.changeHandler}/>
      </Form.Group>
      <Form.Group controlId="formGridState">
      <Form.Label>Select Package</Form.Label>
      <Form.Control id="did" name="packageId" as="select" defaultValue="Select...">
      <option value="" selected> Choose... </option>
      {this.state.packages.map(function(item){
            return <option value={item.id}> {item.name} </option>
          })}
        
      </Form.Control>
      <Form.Label>Subscription Due Date</Form.Label>
        <Form.Control id="ddate" type="date" placeholder=" " name="endDate" value={subDate} onChange={this.changeHandler}/>
       
    </Form.Group>
     <br/>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
    </div>

          )}
      </main>
    )
  }
    
}
export default CreateSubscription;

