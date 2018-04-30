import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import AppBar from './components/app-bar';

import YTSearch from "youtube-api-search";
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from "lodash";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const api_key = "AIzaSyDhN0rdnmMMJuoocA9ysxWe0AzkJnupZvU";

class App extends Component{

    constructor(props){

        super(props);

        this.state = {
            
            videos:[],
            selectedVideo:null
        
        };
        

        this.videoSearch('react js');
       
    }

    videoSearch(term){
        YTSearch({key:api_key, term: term}, (videos) => {

            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });  
        });
    }

    render(){

        const videoSearch = _.debounce((term)=> {this.videoSearch(term)},300);

        return (
            <div> 
                <MuiThemeProvider> 
                <AppBar/>
                <SearchBar onSearchTermChange={videoSearch}/>
                </MuiThemeProvider> 
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo=>this.setState({selectedVideo})}  
                    videos={this.state.videos} 
                      
                />

            </div>
        );
    }
}

ReactDOM.render(<App />,document.querySelector('.container'));