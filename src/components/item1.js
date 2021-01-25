import React, { Component } from 'react';




class Item1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Rio',
            title: "key word",
            keyb: 'ga',
            count: 0
        };
    }
    
    
    render() {
        
        return ( 
            <header style={_style.header}>        
                New item   

            </header>
        )
    }
}

let _style = {
    header: {
        background: "#03a9fa",
        textAlign: 'center',
        color: 'grey',
        border: '1px solid black',
        top: '100px',
        bot: '100px',
        right: '150px',
        left: '80px'

    }

    

}
    
    
    



export default Item1;