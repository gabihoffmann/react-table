import React, {Component} from 'react'
import Table from './Table'
class App extends Component{
    render(){
        //Using a array of objects, as if we were bringing in a JSON-based API
        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor'
            },
            {
                name: 'Mike',
                job: 'Bouncer'
            },
            {
                name: 'Dee',
                job: 'Aspire actress'
            }
        ];

        return(
            <div className="container">
                {/* Pass the data through to the child componet */}
                <Table characterData={characters}/>
            </div>
        )
    }
}

// export the component as App
export default App