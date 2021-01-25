import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Item1 from './components/item1';
import db_json from './db.json'
import NewList from './components/new_list'
import Footer from './components/footer'


class App extends Component {
        
    
    
    state = {
        news:db_json,
        fo: "h"
    }
    
    
    render(){
        
        const {news} = this.state;
       
        return(
            <header>
                <div>
                    <Header/>
                    <NewList news={news}/>
                    <div style={{ textAlign: 'center'}}> I'm in new_item </div>
                </div>
                <h3> News component</h3>
                
               <Item1/>
               <Footer />
               
                

            </header>

        )

    }
}

ReactDOM.render( <App/> , document.getElementById('root'))