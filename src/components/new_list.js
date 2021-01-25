import React from 'react';

import NewItem from '../components/new_list_item'


 const New_list = (prop) => {
     
 
    const new_item = prop.news.map((item) =>{

        return (
        <NewItem item={item} key={item.id}/>
        )
    }
    )
        
    return (
        <div style={_style.header}>
            {new_item}
            
            {prop.children}
            
        </div>
    ) 
}


let _style = {
    header: {
        textAlign: 'center',
        color: 'light blue'
    }
}

export default New_list