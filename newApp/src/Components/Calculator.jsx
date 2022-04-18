import {Component} from 'react'

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {input1:"0",input2:"0",result:"0"}
    }
    add = () => {
        this.setState({result:parseInt(this.state.input1)+parseInt(this.state.input2)});
    }
    sub = () => {
        this.setState({result:parseInt(this.state.input1)-parseInt(this.state.input2)});
    }
    mul = () => {
        this.setState({result:parseInt(this.state.input1)*parseInt(this.state.input2)});
    }
    divd = () => {
        this.setState({result:parseInt(this.state.input1)/parseInt(this.state.input2)});
    }
    mod = () => {
        this.setState({result:parseInt(this.state.input1)%parseInt(this.state.input2)});
    }
    clear = () => {
        this.setState({input1:"0",input2:"0",result:"0"})
    }

    render(){
        const {input1,input2,result} = this.state;
        return(
            <>
            <h3>Calculator</h3>
            <input  onChange={(e) => this.setState({input1:e.target.value})} type={"text"} value={input1}/>
            <input  onChange={(e) => this.setState({input2:e.target.value})} type={"text"} value={input2}/>
            <button onClick={this.add}>+</button>
            <button onClick={this.sub}>-</button>
            <button onClick={this.mul}>*</button>
            <button onClick={this.divd}>/</button>
            <button onClick={this.mod}>%</button>
            <button onClick={this.clear}>CLR</button>
            Result - {result}
            </>
        );
    }
}

export default Calculator;