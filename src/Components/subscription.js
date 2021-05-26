import React, {useContext} from 'react';
import {Button,Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom'


class Subscription extends React.Component {
 
  constructor(props) {
    super(props)
    //console.log(users);

    this.state ={
      name: '',
      packageId: '',
      endDate:'',
    }
  }

    state = {
        loading: true,
        subscriptions: null,
        
    };
  
    async componentDidMount(){
     
       const url = "https://senshost.com:8002/api/Subscription/PageNumber=1/PageSize=10";
       const url2 = "https://senshost.com:8002/api/Package/";
       const response = await fetch(url);
       const data2 = await response.json();
    
       this.setState({subscriptions: data2,loading:false})
      
      
    }


   
    render() {

    const  usethedelete = (user) => {
      const url2 = "https://senshost.com:8002/api/Subscription";
     // console.log(user.name)
      fetch(`${url2}/${user.id}`, {
              method:'DELETE',
            })
            .then(res => res.json())
            .then(() => window.location.href = "https://localhost:3000/subscription")
    }


      let num =0;
     // console.log(users);
    return (

      <main class="col-md-8 ms-sm-auto col-lg-10 px-md-4 ">
          {this.state.loading || !this.state.subscriptions?(<div class="text-center" style={{padding:'300px 100px'}}><div class="spinner-border" role="status"><span class="sr-only"></span></div></div>)  : (
          <div class="">
          <div style={{float:'right',padding:'20px 100px'}}> 
              <a href="/createsub" style={{backgroundColor:'#66a3ff'}} class="btn btn-secondary">Create + </a>
          </div>
        
          <br/> <br/>
          <div id="post-list" class="col-md-8 col-lg-12 post-list" style={{padding:'2px 50px'}} align="middle">
      <table class="table  table-striped" name="detailsTable" id="main">
  <thead>
    
    <tr>
      <th scope="col">#</th>
      <th scope="col">Subscription Name</th>
      <th scope="col">Package Id</th>
      <th scope="col">Due date</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
  {this.state.subscriptions.map(user => (
       <tr>
       <th scope="row"> {num=num+1}</th>
       <td>{user.name}</td>
       <td>{user.packageId}</td>
       <td>{user.endDate}</td>
       <td data-id={user.id}><button onClick={() => usethedelete(user)} id="delete-post" class="btn btn-danger">Delete </button></td>
       <td><Link to={{pathname: "/editsub",state: user }} key={user.packageId}> <button id="edit-post" class="btn btn-secondary">Update </button> </Link></td>
     </tr>
      ))}
   
  </tbody>
</table>
</div>
</div>
          
          )}
                   
      </main>

      
    
           
    )
}
 }
export default Subscription;



