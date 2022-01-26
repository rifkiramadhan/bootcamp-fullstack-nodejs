import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function ItemDetail({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    });


    const [item, setItem] = useState({
        images: {}
    }); 

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.com/v1/playlists/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item.data);
        console.log(item);  
    };

    return (
        <div className="container mt-5">
            <div className="card card-detail mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img className="img-fluid rounded-start" src={item.images.showcase} alt="Images Thumbnail" />
                    </div>
                    <div class="col-md-8">    
                        <div class="card-body">
                            <h1 className="card-title"> {item.name}</h1>
                            <p className="card-tex"><b>Type:</b> {item.gameType}</p>
                            <p className="card-tex"><b>Rating:</b> {item.ratingType}</p>
                            <p className="card-tex"><b>Added:</b> {item.added}</p>
                            <p className="card-tex"><b>Desc:</b> {item.description}</p>
                            <Link className="btn btn-sm btn-primary" to={`/shop`}>
                                Back
                            </Link>
                        </div>
                    </div>                
                </div>
            </div>
        </div> 
    );
}

export default ItemDetail;
