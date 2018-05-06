import React from 'react';
//You should send one  or more proprities in 
const VideoListItem = ({video,onVideoSelect}) => {
    
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (        
            <li onClick={()=>onVideoSelect(video)} className="list-group-item"> 
                <div className="video-list media">

                    <div className="align-self-end mr-3">
                        <img className="media-object" src={imageUrl} />
                    </div>

                    <div className="media-body">
                        <div className="media-heading"><b>{video.snippet.title}</b></div>
                    </div>

                </div> 
             </li>
        );
};

export default VideoListItem;