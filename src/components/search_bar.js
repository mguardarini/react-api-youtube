import React from 'react';
import TextField from 'material-ui/TextField';
import Button from './button'


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
                                id="required"
                                ref={"search"}
                                defaultValue={"iCasei"}
                                style={{width:'400px'}}
                            />
                       <Button label="Pesquisar" searchVideo={event => this.onInputChange(this.refs.search.input.value)}/>
                </div>
         
        );
    }

    //Test get value
    handleClick(term){
        console.log({term});
    }
    onInputChange (term){
       this.setState({term});
       this.props.onSearchTermChange(term);
    }
  }
    

export default SearchBar;
