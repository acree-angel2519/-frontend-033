import Image from "next/image";
import styles from 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <>
   <div classname="container-fluid">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="nav-link" href="#">Logo</a>
            <div class ="collapse navbar-collapse flex-row-reverse" id="navbarText">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Service</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> Contact</a>
                </li>

                <button className="btn btn-outline-success" type="submit">Sign up</button>
                <button className="btn btn-outline-success" type="submit" >Sign in</button>
              </ul>
            </div>
        </nav>
        <div>
      </div>

      </div>
    <div className="container-fluid">
    <div className="col-12">
          <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={10000}>
                <img src="https://th.bing.com/th/id/OIP.zXAzsNA2GhuE3Dq0XZ7pwwHaHa?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval={2000}>
                <img src="..." className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>


        <div className="row text-center">
          <div className="col-md-4 bg-warning p-5">
            01
          </div>
          <div className="col-md-4 bg-danger p-5">
            02
          </div>
          <div className="col-md-4 bg-primary p-5">
            03
          </div>
        <div className="col-md-12 bg-success p-5">
         FOOTER
        </div>
      </div>
    </div>
    </>
  );
}