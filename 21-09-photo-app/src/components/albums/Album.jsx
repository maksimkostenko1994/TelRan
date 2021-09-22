const Album = ({album}) => {
    return (
        <div className="card col-6 col-sm-4 col-md-3 text-center p-3 m-2">
            <img src={album.cover} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{album.title}</h5>
                <button className="btn btn-primary btn-sm">Add photo</button>
            </div>
        </div>
    )
}

export default Album