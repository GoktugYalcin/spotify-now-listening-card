import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'config',
    initialState: {
        name: "A. Göktu Yalçın",
        recentTime: "2h",
        song: "25k jacket (feat. Lil Baby)",
        artist: "Gunna, Lil Baby",
        playlist: "En güzel playlist"
    },
    reducers: {}
})

export default slice.reducer
