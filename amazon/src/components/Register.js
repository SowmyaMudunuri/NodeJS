import React,{Component} from 'react';
export class RegisterComponent extends Component{
constructor(){
super();
this.state={
    FirstName:"",
    LastName:"",
    Age:"",
    Email:"",
    Gender: "",

}

}

handleChange=(e)=>{
    //console.log(e.target.value);
      let currentState =this.state;
      currentState[e.target.name]=e.target.value;
      this.setState(currentState);

}
render(){
return <div>

<h3><center>Register Here</center></h3>
    <form>

    <label><b>FirstName</b></label><br/>
    <input name="FirstName" type="text" onChange={this.handleChange}/><br/><br/>

    <label><b>LastName</b></label><br/>
    <input name="LastName"  type="text" onChange={this.handleChange}/><br/><br/>

    <label><b>Email</b></label><br/>
    <input name="Email" type="email" onChange={this.handleChange}/><br/><br/>

    <label><b>Age</b></label><br/>
    <input type="number" name="Age"  onChange={this.handleChange}/><br/><br/>

    <label ><b>Gender</b></label><br/>
    
          <input  type="radio" name="Gender"  value="Male" onChange={this.handleChange}/>
          <label>
          &nbsp;&nbsp;<b> Male</b> 
          </label><br/>
          <input  type="radio" name="Gender"   value="Female" onChange={this.handleChange}/>
          <label >
          &nbsp;&nbsp; <b>Female</b>
          </label><br/>
    </form>

    <h4>{this.state.FirstName}</h4> <br/>
    <h4>{this.state.LastName}</h4>  <br/>
    <h4>{this.state.Email}</h4>  <br/>
    <h4>{this.state.Age}</h4>  <br/>
    <h4>{this.state.Gender}</h4>   <br/>
</div>;
}
}