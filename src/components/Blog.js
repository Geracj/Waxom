import React, { Component } from 'react'
import '../styles/Blog.scss'

import BGV from '../assets/BGV.mp4'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

library.add( faPlayCircle, faPauseCircle )

class Blog extends Component {
    constructor () {
        super()

        this.state = {
            play: true
        }
    }

    playVideo = () => {
        this.setState({
            play: !this.state.play
        })

        const video = document.querySelector('#blogVideo')

        if( video.paused ) {
            video.play()
        } else {
            video.pause()
        }
    } 

    render() {
        return (
            <div className="blog">
                <video 
                    autoPlay 
                    muted
                    loop
                    id="blogVideo"
                >
                    <source src={BGV} type="video/mp4" />
                </video>
                <div className="blogContent">
                    <FontAwesomeIcon
                        id="blogIcon" 
                        icon={this.state.play ? 'pause-circle' : 'play-circle'} 
                        onClick={this.playVideo.bind(this)}
                    />
                    <h1>
                        Waxom Video Presentation
                    </h1>
                    <p>
                        Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius, qui <br /> sequitur mutationem consuetudium.                    
                    </p>
                </div>
            </div>
        )
    }
}

export default Blog
