import React from 'react'

function Carousel() {
    return (
        <div>

            <div id="carouselExampleFade" className="carousel slide carousel-fade " >
                <div className="carousel-inner " id='carousel' >
                    <div className="carousel-caption bg-transparent" style={{zIndex:"10"}}>
                        <form className="form-inline bg-transparent">
                          <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
                          <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/?burger" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300×300/?momos" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300×300/?pizza" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


















            {/* <div id="carouselExampleControls" classNameName="carousel slide" data-ride="carousel">
  <div classNameName="carousel-inner">
    <div classNameName="carousel-item active">
      <img classNameName="d-block w-100" src="https://source.unsplash.com/random/300×300/?burger" alt="First slide"/>
    </div>
    <div classNameName="carousel-item">
      <img classNameName="d-block w-100" src="https://source.unsplash.com/random/300×300/?momos" alt="Second slide"/>
    </div>
    <div classNameName="carousel-item">
      <img classNameName="d-block w-100" src="https://source.unsplash.com/random/300×300/?pizza" alt="Third slide"/>
    </div>
  </div>
  <a classNameName="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
    <span classNameName="sr-only">Previous</span>
  </a>
  <a classNameName="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
    <span classNameName="sr-only">Next</span>
  </a>
</div> */}
        </div>
    )
}

export default Carousel