
import React from 'react';


//prop.item = {item}
const NewItem = ({item}) =>  {
    
    
    return (
    
    <div key={item.id}>
        <h3>{item.title} hhhhhh </h3>
        <h4>{item.feed}</h4>
    </div>

    )
    
    
}

export default NewItem

