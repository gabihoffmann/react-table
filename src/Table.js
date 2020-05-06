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
const TableBody = () => {
    return(
        <tbody>
                <tr>
                    <td>Charlie</td>
                    <td>Janitor</td>
                </tr>
                <tr>
                    <td>Jake</td>
                    <td>Bouncer</td>
                </tr>
                <tr>
                    <td>Terry</td>
                    <td>Actor</td>
                </tr>
        </tbody>
    )
}


//create the class componet Table
class Table extends Component{
    render(){
        return(
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

export default Table