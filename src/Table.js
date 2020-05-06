import React, {Component} from 'react'

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
            </tr>
        )
    });

    return(
        <tbody>
            {rows}
        </tbody>
    )
}


//Accessing the data passed through to Table
// TableBody props contains the data 
class Table extends Component{
    render(){
        const {characterData} = this.props;
        return(
            <table>
                <TableHeader />
                <TableBody characterData={characterData}/>
            </table>
        )
    }
}

export default Table