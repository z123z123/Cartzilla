import { RestautantCard } from "./common/RestaurantCard";

export function Restaurants() {
  return (
    <div className="container restaurants">
      <h2 className="text-center" id="h-restaurants-intro">
        Popular restaurants in your city
      </h2>
      <p className="text-center" id="p-restaurants-intro">
        Check the best restaurants near you
      </p>
      <div className="row">
        <div className="col-12">
          <div className="row row-cols-1 row-cols-md-4 row-cols-sm-3">
            <RestautantCard src="./img/McD.png" alt="mcdonald's logo" />
            
            <RestautantCard src="./img/Dom.png" alt="domino's logo" />

            <RestautantCard src="./img/Moon.png" alt="moon logo" />

            <RestautantCard src="./img/kfc.png" alt="kfc logo" />

            <RestautantCard src="./img/Olive.png" alt="olive garden logo" />

            <RestautantCard src="./img/Logans.png" alt="logan's roadhouse logo" />

            <RestautantCard src="./img/burking.png" alt="burger king logo" />

            <RestautantCard src="./img/bonefish.png" alt="bonefish logo" />

            <RestautantCard src="./img/ruth.png" alt="ruth's logo" />

            <RestautantCard src="./img/carrabba.png" alt="carrabba logo" />

            <RestautantCard src="./img/phut.png" alt="pizza hut logo" />

            <RestautantCard src="./img/asian.png" alt="asina chao logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
