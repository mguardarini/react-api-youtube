import React from 'react';
import ProgressBar from './progress_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Botton from "./bottom_navigation"
// keyframes returns a unique name based on a hash of the contents of the keyframes
import Paper from 'material-ui/Paper';

const VideoDetail = ({video}) => {

    if(!video){
        return (
            <MuiThemeProvider>       
                <ProgressBar/>
          </MuiThemeProvider>
            
    
         )
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        
        
       
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <MuiThemeProvider>       
                <Botton/>
          </MuiThemeProvider>
            <div className="details">
                <div><b>{video.snippet.title}</b></div>
                <div>{video.snippet.description}</div>
            </div>
            
        </div>
     
       
    );
};

export default VideoDetail;