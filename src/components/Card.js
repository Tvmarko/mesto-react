import React from 'react';
import deletebutton from '../images/delete-button.svg';

function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
      }

    return (
        <div className="elements__element">
            <div className= "elements__element-image">
                <img 
                    className="elements__element-photo" 
                    src={`${card.link}`} 
                    alt={`${card.name}`}
                    onClick={handleClick}
                />
                <button className="elements__element-delete" type="button">
                    <img src={deletebutton} alt="Delete"/>
                </button>
            </div>
            <div className="elements__element-place">
                <h3 className="elements__element-title">{card.name}</h3>
                <div className="elements__element-like-container">
                    <button 
                        className="elements__element-like" 
                        type="button" 
                        aria-label="Like">
                    </button>
                    <span className="elements__element-like-count">{card.likes.length}</span>
                </div> 
            </div>
        </div>
    );
}
    
export default Card;

