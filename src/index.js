import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from "youtube-api-search";
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const api_key = "AIzaSyDhN0rdnmMMJuoocA9ysxWe0AzkJnupZvU";

class App extends Component{

    constructor(props){

        super(props);

        this.state = {
            
            videos:[],
            selectedVideo:null
        
        };
        
        YTSearch({key:api_key, term: 'surfborads'}, (videos) => {

            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
            
        })


    }

    render(){

        return (
            <div> 

                <SearchBar/>
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