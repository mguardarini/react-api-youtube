import React, {Component} from 'react';
import SearchBar from './search_bar';
import YTSearch from "youtube-api-search";
import VideoList from './video_list';
import VideoDetail from './video_detail';
import _ from "lodash";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const api_key = "AIzaSyDhN0rdnmMMJuoocA9ysxWe0AzkJnupZvU";

class Body extends Component{

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

        const vSearch = (term)=> this.videoSearch(term);

        return (
            <div>
            
                <MuiThemeProvider>                
                <SearchBar onSearchTermChange={vSearch}/>
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

export default Body;
