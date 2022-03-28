import { CuisineCard, CuisineCardText, CuisineCardImage } from "./CuisineCard";

export function CuisineOptions() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center" id="h-categories-intro">
            Trending food in your city
          </h2>
          <p className="text-center" id="p-categories-intro">
            Choose what you want and we deliver it to you
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <CuisineCard
              src="./img/01.jpg"
              alt="Burger category image"
              title="Burgers &#38; Fries"
            />
            {/*<div className="col">
                <div className="card category">
                  <img
                    src="./img/01.jpg"
                    className="card-img-top"
                    alt="Burger category image"
                  />
                  <div className="card-body">
                    <h3 className="category-card-text card-title text-center">
                      Burgers &#38; Fries
                    </h3>
                  </div>
                </div>
    </div>*/}

            <CuisineCard
              src="./img/02.jpg"
              alt="Noodles category image"
              title="Noodles"
            />

            <CuisineCard
              src="./img/03.jpg"
              alt="Sushi &#38; Rolls category image"
              title="Sushu &#38; Rolls"
            />

            <CuisineCard
              src="./img/04.jpg"
              alt="Pizza &#38; Pasta category image"
              title="Pizza &#38; Pasta"
            />

            <CuisineCard
              src="./img/05.jpg"
              alt="Coffee &#38; Desserts category image"
              title="Coffee &#38; Desserts"
            />

            <CuisineCard
              src="./img/06.jpg"
              alt="Healthy Food category image"
              title="Healthy Food"
            />


            {/*<CuisineCardText title="This is a Yourney into Sound" />
            <CuisineCardImage
              source="./img/06.jpg"
              alt="Healthy Food category image"
  />*/}
          </div>
        </div>
      </div>
    </div>
  );
}
