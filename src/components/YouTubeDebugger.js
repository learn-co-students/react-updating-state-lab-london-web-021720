// Code YouTubeDebugger Component Here
import React, { Component } from "react"

export default class YouTubeDebugger extends Component {

    constructor () {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    changeBitRate = () => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings:{
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        })
    }

    changeResolution = () => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings:{
                    ...previousState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return <div>
            <button className="bitrate" onClick={this.changeBitRate}></button>
            <button className="resolution" onClick={this.changeResolution}></button>
        </div>
    }
}