import React,{useContext} from 'react';
import {Nav,Navbar,NavDropdown,Form, Button,Jumbotron} from 'react-bootstrap';



class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    
      }

      state = {
          loading:true,
        packages: null,
        subscriptions: null,
        
    };


    async componentDidMount(){
      
        //fetching all the package data
        const url = "https://senshost.com:8002/api/Package/PageNumber=1/PageSize=10";
        const response = await fetch(url);
        const data2 = await response.json();
        this.setState({packages: data2,loading:false})

        //fetching all the subscription data
        const url22 = "https://senshost.com:8002/api/Subscription/PageNumber=1/PageSize=10";
       const response22 = await fetch(url22);
       const data22 = await response22.json();
    
       this.setState({subscriptions: data22,loading:false})
       
     }
    render(){


        return (
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                
                <div class="row gx-10">
                    <div class="col-md-6 col-lg-6" style={{padding:'60px 60px'}}>
                    <Jumbotron style={{backgroundColor:'#ff66d9',borderRadius:'20px'}}>
                        <a href="#" style={{float:'right',padding:'10px 10px',borderRadius:'40%'}} class="btn btn-primary">  {this.state.loading || !this.state.packages?(<div class="spinner-grow" role="status"><span class="sr-only"></span></div>)  : (<h2>{this.state.packages.length}</h2>)}</a>
                      <h1>PACKAGES</h1>
                      <p style={{padding:'40px 40px'}}>
                          Description of the Packages goes here....
                      </p>
                      
                      </Jumbotron>
                        </div>
      
                        <div class="col-md-6 col-lg-6" style={{padding:'60px 60px'}}>
                    <Jumbotron style={{backgroundColor:'#668cff',borderRadius:'20px'}}>
                    <a href="#" style={{float:'right',padding:'10px 10px',borderRadius:'40%'}} class="btn btn-primary">  {this.state.loading || !this.state.subscriptions?(<div class="spinner-grow" role="status"><span class="sr-only"></span></div>)  : (<h2>{this.state.subscriptions.length}</h2>)}</a>
                      <h1>SUBSCRIPTIONS</h1>
                      <p style={{padding:'40px 40px'}}>
                          Description of the subscription goes here
                      </p>
                     
                      </Jumbotron>
                        </div>
      
                        
                    </div>
      
            </main>
          
                 
          )
    }
   
    
}
export default Dashboard;

