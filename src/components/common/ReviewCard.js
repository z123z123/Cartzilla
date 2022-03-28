import { Children } from "react";

export function ReviewCardFilledStar() {
  return (
    <svg
      className="filled-star my-3"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#ffc336"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
}

export function ReviewCardEmptyStar() {
  return (
    <svg
      className="empty-star my-3"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#7d879c"
      viewBox="0 0 16 16"
    >
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
    </svg>
  );
}

export function ReviewCardImage({ src, alt }) {
  return (
    <div>
      <img src={src} className="img-fluid" alt={alt} />
    </div>
  );
}

export function ReviewCardClientName({ clientName, date }) {
  return (
    <div>
      <p>
        <strong>{clientName}</strong>
      </p>
      <p className="date">{date}</p>
    </div>
  );
}

export function ReviewCardFooter({ src, alt, clientName, date }) {
  return (
    <div className="card-footer">
      <div className="customer-details mt-3 d-flex justify-content-center align-items-center">
        <ReviewCardImage src={src} alt={alt} />
        <ReviewCardClientName clientName={clientName} date={date} />
      </div>
    </div>
  );
}

export function ReviewCardBody({ reviewText, children }) {
  return (
    <div className="card-body">
      {children}
      <h3 className="card-text">{reviewText}</h3>
    </div>
  );
}

export function ReviewCardThreeStars({
  reviewText,
  src,
  alt,
  clientName,
  date,
}) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="review card">
        <ReviewCardBody reviewText={reviewText}>
          <ReviewCardFilledStar />
          <ReviewCardFilledStar />
          <ReviewCardFilledStar />
          <ReviewCardEmptyStar />
          <ReviewCardEmptyStar />
        </ReviewCardBody>
        <ReviewCardFooter src={src} alt={alt} clientName={clientName} date={date} />
      </div>
    </div>
  );
}


export function ReviewCardFourStars({
    reviewText,
    src,
    alt,
    clientName,
    date,
  }) {
    return (
      <div className="col-12 col-md-6 col-lg-3">
        <div className="review card">
          <ReviewCardBody reviewText={reviewText}>
            <ReviewCardFilledStar />
            <ReviewCardFilledStar />
            <ReviewCardFilledStar />
            <ReviewCardFilledStar />
            <ReviewCardEmptyStar />
          </ReviewCardBody>
          <ReviewCardFooter src={src} alt={alt} clientName={clientName} date={date} />
        </div>
      </div>
    );
  }
  

  export function ReviewCardFiveStars({
    reviewText,
    src,
    alt,
    clientName,
    date,
  }) {
    return (
      <div className="col-12 col-md-6 col-lg-3">
        <div className="review card">
          <ReviewCardBody reviewText={reviewText}>
            <ReviewCardFilledStar />
            <ReviewCardFilledStar />
            <ReviewCardFilledStar />
            <ReviewCardFilledStar />
            <ReviewCardFilledStar />
          </ReviewCardBody>
          <ReviewCardFooter src={src} alt={alt} clientName={clientName} date={date} />
        </div>
      </div>
    );
  }
