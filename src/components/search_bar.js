import React from 'react';
import TextField from 'material-ui/TextField';
import Button from './button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import swal from 'sweetalert';

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
                                name='search_bar'
                                ref={"search"}
                                //defaultValue={"iCasei"}
                                style={{width:'400px'}}
                            />
                       <Button label="Pesquisar" searchVideo={event => this.onInputChange(this.refs.search.input.value)}/>
                </div>
         
        );
    }

    //Test get value
    // handleClick(term){
    //     console.log({term});
    // }
    onInputChange (term){
       if(!term){
            return (
                swal({
                    title: "Aviso",
                    text: "O campo pesquisar não pode estar vazio.",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
            )
       }
       this.setState({term});
       this.props.onSearchTermChange(term);
    }
  }
    

export default SearchBar;
