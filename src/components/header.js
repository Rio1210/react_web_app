import React, {Component} from 'react';



class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: 'Rio',
            title: "key word",
            keyb: 'ga',
            count: 0
        };
    }

    handleClick(e) {
        this.setState({
            keyb: e.target.value
        })
        console.log("hhhhh in input")
    }
      
    addOne() {
        
        this.setState({
            count: this.state.count + 1
        })
        
    }
    render() {
        
        console.log(this.state)

        return (
            <header style={_style.header}>
                
                <div >
                    <h1 onClick={() => console.log("app click")}> App</h1>
                    <h2> The date is {Date()} </h2>
                </div>
                
                <input onChange={(e) => this.handleClick(e)} />

                <div>  {this.state.name}           {this.state.title}  </div>
                
                <div> { this.state.keyb}</div>
                
                <br/>
                
                <div> {this.state.count}</div>
                
                <button onClick={(e)=> this.addOne(e)}>Click Me to Add One</button>
               
            </header>
        )
    
    }
}

let _style = {
    header: {
        background: "#00000",
        textAlign: 'center',
        color: 'pink'
    }

}



export default Header;