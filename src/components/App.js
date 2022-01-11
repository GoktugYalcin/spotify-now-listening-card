import React, { useState } from "react";
import '../styles/index.scss';
import { SpotifyCard } from "./SpotifyCard";
import {Button, Text, TextInput} from "@mantine/core";
import html2canvas from 'html2canvas';

const App = () => {
    const [name, setName] = useState("A. Göktu Yalçın");
    const [recentTime, setRecentTime] = useState("2h");
    const [song, setSong] = useState("25k jacket (feat. Lil Baby)");
    const [artist, setArtist] = useState("Gunna, Lil Baby");
    const [playlist, setPlaylist] = useState("En güzel playlist");

    return (
    <div className="container">
        <div className="content__preview">
            <SpotifyCard
                name={name}
                recentTime={recentTime}
                song={song}
                artist={artist}
                playlist={playlist}
            />
        </div>

        <div className="lower">
            <div className="content__edit">
                <TextInput
                    placeholder="Name"
                    label="Name"
                    value={name}
                    styles={{
                        label: { color: "#293432"}
                    }}
                    onChange={(v) => {
                        setName(v.target.value)
                    }}
                />
                <TextInput
                    placeholder="Recent Time"
                    label="Recent Time"
                    value={recentTime}
                    styles={{
                        label: { color: "#293432"}
                    }}
                    onChange={(v) => {
                        setRecentTime(v.target.value)
                    }}
                />
                <TextInput
                    placeholder="Song"
                    label="Song"
                    value={song}
                    styles={{
                        label: { color: "#293432"}
                    }}
                    onChange={(v) => {
                        setSong(v.target.value)
                    }}
                />
                <TextInput
                    placeholder="Artist"
                    label="Artist"
                    value={artist}
                    styles={{
                        label: { color: "#293432"}
                    }}
                    onChange={(v) => {
                        setArtist(v.target.value)
                    }}
                />
                <TextInput
                    placeholder="Playlist"
                    label="Playlist"
                    value={playlist}
                    styles={{
                        label: { color: "#293432"}
                    }}
                    onChange={(v) => {
                        setPlaylist(v.target.value)
                    }}
                />
            </div>

            <div className="content__edit">
                <Button color="violet"
                        radius="xl"
                        size="lg"
                        onClick={()=>{
                            html2canvas(document.getElementById('preview')).then((canvas) => {
                                const data = canvas.toDataURL();

                                const downloadLink = document.createElement("a");
                                downloadLink.href = data;
                                downloadLink.download = "SpotifyCard.png";
                                downloadLink.click();
                                /*const a = document.createElement("a"); //Create <a>
                                a.href = "data:image/png;base64," + data; //Image Base64 Goes here
                                a.download = "Image.png"; //File name Here
                                a.click(); //Downloaded file*/
                            })
                        }}
                >
                    Save It
                </Button>
                <div className="blank__space"></div>
                <Text align={"center"} size="lg" weight={700}>If you like it, you can find me on <Text variant="link" variant="gradient"
                                                                                                       gradient={{ from: 'teal', to: 'indigo', deg: 60 }} component="a" href="https://github.com/GoktugYalcin">here</Text>!</Text>
            </div>
        </div>
    </div>
    );
}

export default App;
