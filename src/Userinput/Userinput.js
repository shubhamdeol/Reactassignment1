import React from 'react';


 const userInput = (props) => {
    const style = {
         color: "Blue",
         padding: 20,
         width:500,
         backgroundColor: "gray",
         fontSize: 30,
         borderRadius: "10%"
     }
    return (
        <div>
        <input style={style} type="text" onChange={props.onChange} value={props.username}/>
      
        </div>
    );
}
export default userInput;
