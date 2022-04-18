import React from 'react'


class Button extends React.Component{
   constructor(){
     super();
     this.state = {name:"deepshikha"} 
  }
  changeName(){
    if(this.state.name=="deepshikha"){
        this.setState({name:"Sanskrati"})
    }
    else
    {
        this.setState({name:"deepshikha"})
    }
  }
 render() {
        return <button onClick={() => this.changeName()} style={{color: this.props.color}}>{this.state.name}</button>;
     }
}

export default Button;