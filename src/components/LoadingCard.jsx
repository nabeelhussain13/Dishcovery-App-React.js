import placeholder_img from "../images/placeholder_img.png";

const LoadingCard = () => {
  return (
    <div className="card loading-recipe-card" aria-hidden="true">
      <img
        src={placeholder_img}
        className="card-img-top recipe-img"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-8"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-6"></span> <br />
          <span className="placeholder col-6"></span>
        </p>
        <a
          className="btn btn-primary disabled placeholder col-6"
          aria-disabled="true"
        ></a>
      </div>
    </div>
  );
};

export default LoadingCard;
