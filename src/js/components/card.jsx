import React from "react";


export default function PCard() {
    return (
        <div className="row row-cols-1 row-cols-md-4 px-1">
            <Card titulo='Primer titulo' />
            <Card titulo='Segundo titulo' />
            <Card titulo='Tercer titulo' />
            <Card />
        </div>
    )
}

function Card({ titulo }) {
    return (
        <div className="col mb-3">
            <div className="card">
                <img src="/src/img/rigo-baby.jpg" className="card-img-top" alt="..." />
                <div className="card-body text-center m-3">
                    <h5 className="card-title">{titulo ? titulo : 'Titulo por Defecto'}</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                </div>
                <div class="card-footer text-body-secondary text-center ">
                    <a href="#" class="btn btn-primary m-2 ">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}