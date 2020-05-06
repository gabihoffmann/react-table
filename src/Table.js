import React from 'react'

//create simple componets
const TableHeader = () => {
    return(
        <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
        </thead>
    )
}
const TableBody = (props) => {
    const rows = props.characterData.map((row,index) => {
        return (
            // Keys: https://reactjs.org/docs/lists-and-keys.html#keys
            <tr key= {index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=> props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    });

    return(
        <tbody>
            {rows}
        </tbody>
    )
}

//it would be best practice to transform Table into a simple component from the class component it currently is.
const Table = (props) => {
   const {characterData, removeCharacter} = props;
        
   return(
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        )
}

export default Table