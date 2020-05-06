import React, {Component} from 'react'
import Table from './Table'
class App extends Component{
    //create a STATE object
    state = {
        characters : [
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
        ]
    };

    /**
     * to be able to remove a character from the table, 
     * we're going to create a removeCharacter method
     */
   removeCharacter = index => {
       const {characters} = this.state;
       
       /**
        * use this.setState()
        * a built-in method for manipulating state
        */
       this.setState({
            characters: characters.filter((character,i) => {
                return i !== index
            })
        });
   }

   render(){
       const {characters} = this.state
       return(
           <div className="container">
               <Table  characterData={characters} removeCharacter={this.removeCharacter}/>
           </div>
       );
   }
}

// export the component as App
export default App