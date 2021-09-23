import {useContext} from "react"
import {AppContext} from "../../App"
import Album from "./Album"

const Albums = () => {

    const {currentUsersAlbums} = useContext(AppContext)

    const albums = currentUsersAlbums()

    return (
        <div className="container">
            <h1 className="text-center my-5">All our albums</h1>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    )
}

export default Albums