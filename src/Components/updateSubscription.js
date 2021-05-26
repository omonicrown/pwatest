import React from 'react';
import {Nav,Navbar,NavDropdown,Form, Button,Jumbotron} from 'react-bootstrap';


class UpdateSubscription extends React.Component{
  constructor(props) {
    super(props)
    
    this.state ={
      name: '',
      packageId: '',
      endDate:'',
      startDate: '',
      creationDate:'',
      idd:''
    }
  }

  
  state = {
    loading: true,
    packages: null,
    
};

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = async (e) => {
    e.preventDefault()
    this.state.name = document.getElementById('dname').value
    this.state.packageId = document.getElementById('did').value
    this.state.endDate = document.getElementById('ddate').value
    this.state.startDate = document.getElementById('sdate').value
    this.state.creationDate = document.getElementById('cdate').value
    this.state.idd = document.getElementById('idd').value
    
    const url2 = "https://senshost.com:8002/api/Subscription";
      await fetch(`${url2}/${this.state.idd}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify({
          name: this.state.name,
          packageId: this.state.packageId,
          endDate:this.state.endDate,
          startDate:this.state.startDate,
          creationDate:this.state.creationDate,
          id:this.state.idd
        })
      })
      .then(res => res.json())
      .then(() => window.location.href = "https://master.d13r0ijqtj3xwd.amplifyapp.com/subscription")
    
  }

  async componentDidMount(){
      
    const url = "https://senshost.com:8002/api/Package/PageNumber=1/PageSize=10";
    const url2 = "https://senshost.com:8002/api/Package/";
    const response = await fetch(url);
    const data2 = await response.json();
    //console.log(data2)
 
    this.setState({packages: data2,loading:false})
   
 }
   

  render() {
    var date = new Date();
    var today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    const { state } = this.props.location;
    var curr =new Date(state.endDate);
    var date2 = curr.toISOString().substr(0,10);

    return (
      <main class="col-md-8 ms-sm-auto col-lg-10 px-md-4 ">
         {this.state.loading || !this.state.packages?(<h2> Loading</h2>)  : (
           
        <div class="row mt-4 " align="middle" style={{padding:'20px 20px'}}> 
        <Form onSubmit={this.submitHandler}>
      <div class="col-md-5 col-lg-4 " style={{backgroundColor:'#b3b3ff',padding:'20px 20px'}}>
      <Form.Group controlId="packageName">
        <Form.Label>Subscription Name</Form.Label>
        <Form.Control id="dname" type="text" placeholder="Enter Subscription Name" defaultValue={state.name} name="name" onChange={this.changeHandler}/>
        <Form.Control id="sdate" type="hidden"  name="sdate" defaultValue={state.startDate} onChange={this.changeHandler}/>
        <Form.Control id="cdate" type="hidden"  name="cdate" defaultValue={state.creationDate} onChange={this.changeHandler}/>
        <Form.Control id="idd" type="hidden"  name="idd" defaultValue={state.id} onChange={this.changeHandler}/>
      </Form.Group>
      <Form.Group controlId="formGridState">
      <Form.Label>Select Package</Form.Label>
      <Form.Control id="did" name="packageId" as="select" defaultValue={state.packageId}>
      <option  selected> Choose... </option>
      {this.state.packages.map(function(item){
            return <option value={item.id}> {item.name} </option>
          })}
        
      </Form.Control>
      <Form.Label>Subscription Due Date</Form.Label>
        <Form.Control id="ddate" type="date" placeholder=" " defaultValue={date2} name="endDate" onChange={this.changeHandler}/>
       
    </Form.Group>
     <br/>
    
      <Button variant="primary" type="submit">
        Update
      </Button>
      </div>
    </Form>
    </div>
         )}
    
      </main>

      
    
           
    )
  }
}
export default UpdateSubscription;

