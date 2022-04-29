import React from 'react';
import api from '../utils/api.js';
import Card from "./Card.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState(''); 
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
    .then(([userName, userDescription, userAvatar, cards]) => {
      setUserName(userName);
      setUserDescription(userDescription);
      setUserAvatar(userAvatar);
      setCards(cards);
    })
    .catch((err) => {
      console.log(err); 
    });
}, []);

  return (
    <main className="content">
      <section className="profile">
      <div className="profile__info-container">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя"/>
          <div className="profile__avatar-overlay">
            <button className="profile__avatar-button" type="button" aria-label="Edit" onClick={onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__info-title">{userName}</h1>
          <button className="profile__edit-button" type="button" aria-label="Edit" onClick={onEditProfile}></button>
          <p className="profile__info-subtitle">{userDescription}</p>
        </div>
      </div>  
      <button className="profile__add-button" type="button" aria-label="Add" onClick={onAddPlace}></button>
    </section>
    <section className="elements">
      {cards.map((card) => {
          return (
            <Card key={card._id} card={card} onCardClick={onCardClick}/>
          );
        })}
    </section>
  </main>
  );
}

export default Main;