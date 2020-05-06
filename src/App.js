import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
class App extends Component{
    //create a STATE object
    state = {
        characters : []
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

   //this function will update the state adding the existing charactes and the new one
   handleSubmit = (character) =>{
    this.setState({
        characters: [...this.state.characters, character ]
    })
}

   render(){
       const {characters} = this.state
       return(
           <div className="container">
               <Table  characterData={characters} removeCharacter={this.removeCharacter}/>
               <Form  handleSubmit={this.handleSubmit}/>
           </div>
       );
   }
}

// export the component as App
export default App