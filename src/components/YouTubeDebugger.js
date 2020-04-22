// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component{
    constructor(){
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

    handleBitrate = () => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleRes = () => {
        this.setState({
            ...this.state,
            settings:{
                ...this.state.settings,
                video: {
                    resolution: "720p"
                }
            }
        })
    }

    render(){
        return (

            <div>
                <button
                className="bitrate"
                onClick={this.handleBitrate}>
                </button>

                <button
                className="resolution"
                onClick={this.handleRes}>
                </button>
            </div>
        )
    }
}