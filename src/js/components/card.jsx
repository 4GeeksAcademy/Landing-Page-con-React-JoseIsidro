import React from "react";


export default function PCard() {
    return (
        <div className="row row-cols-1 row-cols-md-4 px-1">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

function Card() {
    return (
        <div className="col mb-3">
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    )
}