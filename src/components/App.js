import '../styles/index.scss';
import userPhoto from '../assets/defaultPhoto.png'
import playlistIcon from '../assets/playlistIcon.png'

function App() {
  return (
      <div className="container">
        <div className="content__preview">
          <div className="preview">
            <img alt="User Photo" src={userPhoto} className="previev_photo" height="80" width="80"/>
            <div className="previev__info">
                <div className="preview__info-header">
                    <div className="preview__info-header_name">
                        A. Göktu Yalçın
                    </div>
                    <div className="preview__info-header_time">
                        2h
                    </div>
                </div>
                <div className="preview__info-body">
                    <div className="preview__info-body_song">
                        25k jacket (feat. Lil Baby)
                    </div>
                    •
                    <div className="preview__info-body_artist">
                        Gunna, Lil Baby
                    </div>
                </div>
                <div className="preview__info-footer">
                    <img width="11" height="11" src={playlistIcon} />
                    <div className="preview__info-footer_playlist">
                        En sevdiğim playlist
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
