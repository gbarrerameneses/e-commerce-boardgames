import React from 'react'
// import LogoToxicGames from './../assets/LogoToxicGames.png'

export const Carousel = () => {
  return (
    <>
     
     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ height: "500px" }}>
            <div className="carousel-item active">
            <img src="http://espaciojoven.marchamalo.es/wp-content/uploads/2021/09/1632422129124-1.jpg" className="d-block w-100" alt="..." style={{ height: "500px", objectFit: "cover" }} />
            </div>
            <div className="carousel-item">
            <img src="https://i0.wp.com/devir.mx/wp-content/uploads/2018/09/Sin-t%C3%ADtulo-1.png?w=1200&ssl=1" className="d-block w-100" alt="..." style={{ height: "500px", objectFit: "cover" }} />
            </div>
            <div className="carousel-item">
            <img src="https://1.bp.blogspot.com/-LQzFQ6N7TpE/XwyAVUtAi7I/AAAAAAAAGVY/Iywo_B3b6R8z1v07ka4dHrlJVYrhjjRYQCLcBGAsYHQ/s1600/IMG_20200125_232027-scaled.jpg" className="d-block w-100" alt="..."   style={{ height: "500px", objectFit: "cover" }} />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </>
   
  )
}
