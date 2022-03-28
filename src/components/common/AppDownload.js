import {AppStoreBadges} from "./AppStoreBadges"


export function AppDownload() {
return(

    <section className="bg-red pt-5 d-flex align-items-center">
    <div className="container">
      <div className="row">

        <div className="col-6 col-lg-5 offset-lg-2 d-flex align-items-center">
          <div className="app-preview-content align-items-center pe-lg-5 mb-5">
            <h2 id="app-preview-download-text-1">
              Order food on the go with Cartzilla App
            </h2>
            <p id="app-preview-download-text-2">
              Pay with in app wallet, collect loyalty points, track your
              orders in real time and much more.
            </p>
            <AppStoreBadges />
            
          </div>
        </div>

        <div
          class="phone-img d-flex col-5 offset-1 offset-lg-0 col-lg-4 align-items-end"
        >
          <div>
            <img
              className="img-fluid d-block mt-4 mt-lg-0 pe-0 pe-lg-5"
              src="./img/phone.png"
              width="626"
              height="800"
              alt="phone app"
            />
          </div>
        </div>
        
      </div>
    </div>
  </section>
)

}