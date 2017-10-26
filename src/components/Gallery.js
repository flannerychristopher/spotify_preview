import React, { Component } from 'react';
import '../App.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview_url: '',
      audio: null,
      playing: false
    }
  }

  playAudio(preview_url) {
    let audio = new Audio(preview_url);
    if (this.state.playing) {
      this.state.audio.pause();
      if (this.state.preview_url === preview_url) {
        this.setState({ playing: false, preview_url: '' })
      } else {
        audio.play()
        this.setState({ audio, preview_url, playing: true })
      }
    } else {
      audio.play()
      this.setState({ audio, preview_url, playing: true })
    }
  }

  render() {
    if (!this.props.tracks) {
      return (<div></div>);
    }

    let { tracks } = this.props;

    const trackList = <div className="trackList">
      {
        tracks.map((track, i) => {
          if (!track.preview_url) {
            return false;
          }
          return (
            <div
              key={i}
              className="track"
              onClick={() => this.playAudio(track.preview_url)}
            >
              <span className="playIcon">
                {
                  this.state.preview_url === track.preview_url
                    ? <span role="img" aria-label="pause">&#9208;</span>
                    : <span role="img" aria-label="play">&#128265;</span>
                }
              </span>
              <span className="trackLabel">{track.name}</span>
              <img src={track.album.images[0].url} className="trackImg" alt="album" />
            </div>
          );
        })
      }
    </div>

    return (
      <div className="Gallery">
        {trackList}
      </div>
    );
  }
}