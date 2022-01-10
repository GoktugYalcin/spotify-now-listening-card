import React, {useState} from 'react'
import '../styles/index.scss'
import userPhoto from "../assets/defaultPhoto.png";
import playlistIcon from "../assets/playlistIcon.png";
import {useSelector} from "react-redux";


export const SpotifyCard = () => {

    const name = useSelector((state) => state.config.name)
    const recentTime = useSelector((state) => state.config.recentTime)
    const song = useSelector((state) => state.config.song)
    const artist = useSelector((state) => state.config.artist)
    const playlist = useSelector((state) => state.config.playlist)

    return (
        <div className="preview">
            <img alt="User Thing" src={userPhoto} className="preview_photo" height="80" width="80"/>
            <div className="preview__info">
                <div className="preview__info-header">
                    <div className="preview__info-header_name">
                        {name}
                    </div>
                    <div className="preview__info-header_time">
                        {recentTime}
                    </div>
                </div>
                <div className="preview__info-body">
                    <div className="preview__info-body_song">
                        {song}
                    </div>
                    •
                    <div className="preview__info-body_artist">
                        {artist}
                    </div>
                </div>
                <div className="preview__info-footer">
                    <img alt="Playlist" width="11" height="11" src={playlistIcon} />
                    <div className="preview__info-footer_playlist">
                        {playlist}
                    </div>
                </div>
            </div>
        </div>
    )
}