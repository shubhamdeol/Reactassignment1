import React from 'react';
import './UserOutput.css'

export const UserOutput = (props) => {
   return (
        <div class="trystyle">
        <h1 onClick = {props.onClick}>I am: {props.username} </h1>   
        <p>Lorizzle ipsum owned sit amizzle own yo adipiscing elit. Nullizzle </p>
        <p>ien away, crackalackin volutpizzle, break it down fo, gravida vizzle, arcu. Break it down</p>
        </div>
   );

}
export default UserOutput;

