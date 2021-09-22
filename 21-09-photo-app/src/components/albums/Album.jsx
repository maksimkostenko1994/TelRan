import {useState, useContext} from "react"
import {AppContext} from "../../App"

import {Link} from "react-router-dom"

const Album = ({album}) => {

    const [photo, setPhoto] = useState({title: '', src: '', albumId: album.id, likes: 0, dislikes: 0})

    const {addNewPhoto} = useContext(AppContext)

    const changeFieldHandler = ({target}) => setPhoto({...photo, [target.name]: target.value})

    return (
        <div className="card col-6 col-sm-4 col-md-3 text-center p-3 m-2">
            <Link to={`/albums/${album.id}/photos`}>
                <img src={album.cover} className="card-img-top" alt="..."/>
            </Link>
            <div className="card-body">
                <h5 className="card-title">{album.title}</h5>
                <button className="btn btn-primary btn-sm" data-bs-toggle="modal"
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
            </div>
        </div>
    )
}

export default Album