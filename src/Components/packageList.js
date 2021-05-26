import React,{useState,createContext} from 'react';
import {Nav,Navbar,NavDropdown,Form, Button,Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export const MovieContext = createContext();


class PackageList extends React.Component {
 
  constructor(props) {
    super(props)
    //console.log(users);

    this.state ={
      name: '',
      description: '',
      packageDefination:'',
      output:''
    }
  }

    state = {
        loading: true,
        packages: null,
        
    };
  
 
    async componentDidMount(){
      
       const url = "https://senshost.com:8002/api/Package/PageNumber=1/PageSize=10";
       const url2 = "https://senshost.com:8002/api/Package/";
       const response = await fetch(url);
       const data2 = await response.json();
    
       this.setState({packages: data2,loading:false})
      
    }

    render() {
      const MovieProvider =(props)=> {
        const [movies] = useState(this.state.packages);
      
      
      }

    
    const  usethedelete = (user) => {
      const url2 = "https://senshost.com:8002/api/Package";
      fetch(`${url2}/${user.id}`, {
              method:'DELETE',
            })
            .then(res => res.json())
            .then(() => window.location.href = "https://master.d13r0ijqtj3xwd.amplifyapp.com/show/")
    }


      let num =0;
     // console.log(users);
    return (
      

      <main class="col-md-8 col-sm-8 col-lg-10 px-md-4 ">
          {this.state.loading || !this.state.packages?(<div class="text-center" style={{padding:'300px 100px'}}><div class="spinner-border" role="status"><span class="sr-only"></span></div></div>)  : (
          <div class="">
          <div style={{float:'right',padding:'20px 100px'}}> 
              <a href="/create" style={{backgroundColor:'#66a3ff'}} class="btn btn-secondary">Create + </a>
          </div>
        
          <br/> <br/>
          <div id="post-list" class="col-md-8 col-sm-6 col-lg-12 post-list" style={{padding:'2px 50px'}} align="middle">
      <table class="table  table-striped" name="detailsTable" id="main">
  <thead>
    
    <tr>
      <th scope="col">#</th>
      <th scope="col">Package Name</th>
      <th scope="col">Package Description</th>
      <th scope="col">Package Definition</th>
      {/* <th scope="col">Package ID</th> */}
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
  {this.state.packages.map(user => (
       <tr>
       <th scope="row"> {num=num+1}</th>
       <td id="card-title">{user.name}</td>
       <td>{user.description}</td>
       <td>{user.packageDefination}</td>
       {/* <td id="user_id{$user.id}">{user.id}</td> */}
       <td data-id={user.id}><button onClick={() => usethedelete(user)} id="delete-post" class="btn btn-danger">Delete </button></td>
       <td><Link to={{pathname: "/edit",state: user }} key={user.id}> <button id="edit-post" class="btn btn-secondary">Update </button> </Link></td>
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
export default PackageList;



