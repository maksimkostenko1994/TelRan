const Error = ({message}) => {
    return(
        <div className="alert alert-danger" role="alert">
            <h1>{message}</h1>
        </div>
    )
}

export default Error