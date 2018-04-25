import React from 'react';
import Rotate from '../style/Rotate';
// keyframes returns a unique name based on a hash of the contents of the keyframes

const VideoDetail = ({video}) => {

    if(!video){
        return (<Rotate>&lt; 💅 ">">">">&gt;</Rotate>)
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>

    );
};

export default VideoDetail;