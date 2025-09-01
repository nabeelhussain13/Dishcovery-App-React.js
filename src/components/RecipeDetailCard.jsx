const RecipeDetailCard = ({ recipeInfo, tags }) => {
  return (
    <div className="card mb-3 card-info">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            src={recipeInfo?.strMealThumb}
            className="img-fluid rounded-start info-img"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body info-body">
            <div className="card-title detail-name">{recipeInfo?.strMeal}</div>
            <div className="card-text detail-category">
              <span>
                Type: <span>{recipeInfo?.strCategory}</span>
              </span>{" "}
              <br />
              <span>
                Cuisine: <span>{recipeInfo?.strArea}</span>
              </span>
            </div>
            <div className="detail-tags">
              {tags.map((tag) => (
                <span key={tag} className="badge rounded-pill tags">
                  {tag}
                </span>
              ))}
            </div>
            <div className="detail-btns">
              <a href={recipeInfo?.strSource} target="_blank">
                <button className="btn my-btn">Read More</button>
              </a>
              <a href={recipeInfo?.strYoutube} target="_blank">
                <button className="btn my-btn one-btn">Watch Tutotial</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailCard;
