/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function BookItem(props) {
    const { book } = props;

    return (
        <>
            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                        <img className="card-img-top" src={book.image} alt="Dummy Image" />
                    </div>
                    <div className="card-body">
                        <h5>{book.title}</h5>
                        <strong>Rp. {book.price}</strong>
                        <br />
                        <span className="badge badge-pill badge-primary">{book.type}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookItem;
