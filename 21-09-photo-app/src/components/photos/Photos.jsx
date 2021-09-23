import {AppContext} from "../../App"
import {useContext, useState} from "react"

import Photo from "./Photo"

const Photos = ({match}) => {
    const {currentAlbumPhotos, currentUsersAlbums, addNewPhoto} = useContext(AppContext)

    const id = +match.params.id
    const currentAlbum = currentUsersAlbums().find(item => item.id === id)

    const [photo, setPhoto] = useState({title: '', src: '', albumId: currentAlbum.id, likes: 0, dislikes: 0})

    const photos = currentAlbumPhotos(id)

    const changeFieldHandler = ({target}) => setPhoto({...photo, [target.name]: target.value})

    return (
        <div className="container">
            <h1>{currentAlbum.title}</h1>
            <button className="btn btn-success" data-bs-toggle="modal"
                    data-bs-target="#addPhotoModal">Add photo
            </button>
            <div className="modal fade" id="addPhotoModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add your new photo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <input
                                className="form-control my-3"
                                type="text"
                                name="title"
                                placeholder="Type photo title"
                                value={photo.title}
                                onChange={changeFieldHandler}
                            />
                            <input
                                className="form-control my-3"
                                type="text"
                                name="src"
                                placeholder="Type cover src"
                                value={photo.src}
                                onChange={changeFieldHandler}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                    onClick={() => addNewPhoto(photo)}
                            >
                                add photo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
            </div>
        </div>
    )
}

export default Photos