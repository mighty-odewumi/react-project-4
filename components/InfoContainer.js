export default function InfoContainer(props) {
  return (
    <>
      <section className="info-container">
        
        <img src={props.imageUrl} alt="a tourist site" className="info--img" />
        
        <div className="info--details">
          <div className="info--details-1">
            <img
              src="/assets/location-icon3.svg"
              alt="a location icon" className="location-icon"
            />

            <span className="location">&nbsp;{props.location}</span>

            <a href={props.googleMapsUrl}className="link">
              View on Google Maps
            </a>
          </div>

          <h1 className="info--title">{props.title}</h1>

          <h4 className="date">{props.startDate} - {props.endDate}</h4>

          <p className="info--paragraph">
            {props.description}
          </p>

        </div>
      </section>

      <div className="divider">
      </div>

    </>

  )
}
