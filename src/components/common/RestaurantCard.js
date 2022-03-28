export function RestautantCard({src, alt}){
    return(
        <div className="col">
        <div className="restaurant-card card">
          <img
            src={src}
            className="card-img-top"
            alt={alt}
          />
        </div>
      </div>
    )
}