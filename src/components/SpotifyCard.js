import React from 'react'
import '../styles/index.scss'
import playlistIcon from "../assets/playlistIcon.png";


export const SpotifyCard = ({name, recentTime, song, artist, playlist, photo}) => {

    /*const name = useSelector((state) => state.config.name)
    const recentTime = useSelector((state) => state.config.recentTime)
    const song = useSelector((state) => state.config.song)
    const artist = useSelector((state) => state.config.artist)
    const playlist = useSelector((state) => state.config.playlist)*/

    return (
        <div id="preview" className="preview">
            <img alt="User Thing" src={photo} className="preview_photo" height="80" width="80"/>
            <div className="preview__info">
                <div className="preview__info-header">
                    <div className="preview__info-header_name">
                        {name.length > 20 ? name.slice(0, 20) : name}
                    </div>
                    <div className="preview__info-header_time">
                        {recentTime.length > 4 ? recentTime.slice(0, 4) : recentTime}
                    </div>
                </div>
                <div className="preview__info-body">
                    <div className="preview__info-body_song">
                        {song.length > 20 ? song.slice(0, 20) + '...' : song}
                    </div>
                    •
                    <div className="preview__info-body_artist">
                        {artist.length > 20 ? artist.slice(0, 20) + '...' : artist}
                    </div>
                </div>
                <div className="preview__info-footer">
                    <img alt="Playlist" width="11" height="11" src={playlistIcon} />
                    <div className="preview__info-footer_playlist">
                        {playlist.length > 20 ? playlist.slice(0, 20) + '...' : playlist}
                    </div>
                </div>
            </div>
        </div>
    )
}