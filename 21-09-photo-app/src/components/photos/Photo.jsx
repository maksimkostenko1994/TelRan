const Photo = ({photo}) => {
  return(
      <div className="card col-6 col-sm-4 col-md-3 text-center p-3 m-2">
          <img src={photo.src} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{photo.title}</h5>
          </div>
      </div>
  )
}

export default Photo