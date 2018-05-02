import React from 'react';
import TextField from 'material-ui/TextField';
import Button from './raised_button'


class SearchBar extends TextField {

    constructor(props){
        super(props);
        this.state = {term:''};  
    }
    
    render(){
        return (
                <div className="search-bar">
                
                        <TextField
                                hintText="Digite o que deseja buscar."
                                floatingLabelText="Pesquisar"
                                id="search"
                                name='search'
                                type="text"
                                value={this.state.term}
                                onChange={event => this.onInputChange(event.target.value)}
                                style={{width:'400px'}}
                            />
                        <Button title="Pesquisar"
                            value={this.state.term}
                            onClick={event => this.onInputChange(event.target.value)}

                        />
                </div>
         
        );
    }

    onInputChange (term){
       this.setState({term});
       this.props.onSearchTermChange(term);
    }
  }
    

export default SearchBar;
