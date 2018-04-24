import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component {

    constructor(props){
        
        super(props);

        this.state = {term:'Starting value'};

    }


    render(){
        return (
            <div> 
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({term:event.target.value})}/>
            </div>
        );
    }

    onInputChange (event){
        console.log(event.target.value)
    }
}


// const SearchBar = () => {
//     return <input /> //react.createElemente
// };

export default SearchBar;

