import React,{Component} from 'react';
import Header from './Header';

export class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            UserName:"",
            Password: ""
        }
    }
    
    //OnChange Handler is EVENT BINDING
    handleChange=(e)=>{
        //console.log(e.target.value);
          let currentState =this.state;
          currentState[e.target.name]=e.target.value;
          this.setState(currentState);

   }
   render(){
    return <div>
        <h1>Lohin Here Dude</h1>
       Username <input name="UserName" type="text" onChange={this.handleChange}/><br/>
       Password <input name="Password" type="password" onChange={this.handleChange}/>
        <h4>{this.state.UserName}</h4>
        <h4>{this.state.Password}</h4>
    </div>;
}
}