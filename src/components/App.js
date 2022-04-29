import React from 'react';
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
    
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        buttonSubmitText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >          
        <div className="popup__form-field">
          <input className="popup__input popup__input_name" id="name" type="text" name="name" placeholder="Ваше имя" required minLength="2" maxLength="40"/>
          <span className="popup__input-error name-error"></span>
        </div>
        <div className="popup__form-field"> 
          <input className="popup__input popup__input_about" id="about" type="text" name="profession" placeholder="Ваш род деятельности" required minLength="2" maxLength="200"/>
          <span className="popup__input-error about-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        buttonSubmitText="Сохранить"
        isOpen={isEditAvatarPopupOpen}     
        onClose={closeAllPopups}
      >          
        <div className="popup__form-field">
          <input className="popup__input popup__input_avatar" id="avatar" type="url" name="avatar" placeholder="Ссылка на аватар" required/>
          <span className="popup__input-error avatar-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="add"
        buttonSubmitText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >          
        <div className="popup__form-field"> 
          <input className="popup__input popup__input_place" id="place" type="text" name="place" placeholder="Название" required minLength="2" maxLength="30"/>
          <span className="popup__input-error place-error"></span>
        </div>
        <div className="popup__form-field">
          <input className="popup__input popup__input_image" id="image" type="url" name="link" placeholder="Ссылка на картинку" required/>
          <span className="popup__input-error image-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm 
        title="Вы уверены?" 
        name="confirm" 
        buttonSubmitText="Да" 
        />

      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups} 
        />
    </div>
  );
}

export default App;

