import React from "react";

export const Todo = ({todo, index, deleteTodo}) => {
    return (
        <>
            <div className="list">
                <h3>{todo}</h3> 
                <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
            </div>
        </>
        
    );  
}