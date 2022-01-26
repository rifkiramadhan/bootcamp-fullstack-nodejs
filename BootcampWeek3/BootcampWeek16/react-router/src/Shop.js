import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]); 

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v1/playlists');
        
        const items = await data.json();
        console.log(items.data);
        setItems(items.data);
    };

    return (
        <div>
            {
                items.map(item => (
                    <>
                        <div className="row align-items-center justify-content-center mt-5 mb-4">
                            <div className="col-sm-6">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title" key={item.id}>
                                    <Link to={`/shop/${item.id}`}>
                                        {item.name}
                                    </Link>
                                    </h5>
                                    <li class=" d-flex justify-content-between align-items-start">
                                        <div class="ms-2 mb-2 me-auto">
                                            <small>
                                                <b>Max Players:</b> <span class="badge bg-primary text-white rounded-pill">{item.maxPlayers}</span>
                                            </small>
                                            <br />
                                            <small>
                                                <b>Max Teams:</b> <span class="badge bg-success text-white rounded-pill">{item.maxTeams}</span>
                                            </small>
                                        </div>
                                    </li>
                                    <p className="max-desc card-text"><b>Desc:</b> {item.description}</p>
                                </div>
                                </div>
                            </div>   
                        </div>
                    </>
                ))
            }
        </div>
    );
}

export default Shop;
