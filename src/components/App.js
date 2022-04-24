import React from 'react';
/*import './App.css';*/

function App() {
  return (
    <div className="App">
      <body className="page">
        <header className="header"> 
        <img className="header__logo" src="<%=require('./images/header-logo.svg')%>" alt="логотип"></img>
      </header>
      <main className="content">
      <section className="profile">
      <div className="profile__info-container">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src="#" alt="Аватар пользователя"></img>
          <div className="profile__avatar-overlay">
            <button className="profile__avatar-button" type="button" aria-label="Edit"></button>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__info-title">:fr</h1>
          <button className="profile__edit-button" type="button" aria-label="Edit"></button>
          <p className="profile__info-subtitle">Xtkjdtr</p>
        </div>
      </div>  
      <button className="profile__add-button" type="button" aria-label="Add"></button>
    </section>
    <section className="elements">
    </section>
  </main>
  <footer className="footer">
    <p className="footer__copyright">&copy;2021.&nbsp;Mesto Russia</p>
  </footer>
  <template className="elements-template">
    <div className="elements__element">
      <div className= "elements__element-image">
        <img className="elements__element-photo" src="#" alt=""></img>
        <button className="elements__element-delete" alt="Delete" type="button">
          <img src="<%=require('./images/delete-button.svg')%>"></img>
        </button>
      </div>
      <div className="elements__element-place">
        <h3 className="elements__element-title"></h3>
        <div className="elements__element-like-container">
          <button className="elements__element-like" type="button" aria-label="Like"></button>
          <span className="elements__element-like-count"></span>
        </div> 
      </div>
    </div>
  </template>
  <section className="popup popup_edit">
    <div className="popup__container">
      <h3 className="popup__title">Редактировать профиль</h3>
      <form className="popup__form popup__form_edit" name="Popup" novalidate>
        <div className="popup__form-field">
          <input className="popup__input popup__input_name" id="name" type="text" name="name" placeholder="Ваше имя" required minlength="2" maxlength="40"></input>
          <span className="popup__input-error name-error"></span>
        </div>
        <div className="popup__form-field"> 
          <input className="popup__input popup__input_about" id="about" type="text" name="profession" placeholder="Ваш род деятельности" required minlength="2" maxlength="200"></input>
          <span className="popup__input-error about-error"></span>
        </div>
        <button className="popup__save-button" type="submit">Сохранить</button>
      </form>
      <button className="popup__close-button popup__close-button_edit" type="button" aria-label="Close"></button>
    </div>
  </section>
  <section className="popup popup_avatar">
    <div className="popup__container popup__container_avatar">
      <h3 className="popup__title">Обновить аватар</h3>
      <form className="popup__form popup__form_avatar" name="Popup" novalidate>
        <div className="popup__form-field">
          <input className="popup__input popup__input_avatar" id="avatar" type="url" name="avatar" placeholder="Ссылка на аватар" required></input>
          <span className="popup__input-error avatar-error"></span>
        </div>
        <button className="popup__save-button popup__save-button_avatar" type="submit">Сохранить</button>
      </form>
      <button className="popup__close-button popup__close-button_avatar" type="button" aria-label="Close"></button>
    </div>
  </section>
  <section className="popup popup_add">
    <div className="popup__container">
      <h3 className="popup__title">Новое место</h3>
      <form className="popup__form popup__form_add" name="Popup" novalidate>
        <div className="popup__form-field"> 
          <input className="popup__input popup__input_place" id="place" type="text" name="place" placeholder="Название" required minlength="2" maxlength="30"></input>
          <span className="popup__input-error place-error"></span>
        </div>
        <div className="popup__form-field">
          <input className="popup__input popup__input_image" id="image" type="url" name="link" placeholder="Ссылка на картинку" required></input>
          <span className="popup__input-error image-error"></span>
        </div>
        <button className="popup__save-button popup__save-button_add" type="submit">Создать</button>
      </form>
      <button className="popup__close-button popup__close-button_add" type="button" aria-label="Close"></button>
    </div>
  </section>
  <section className="popup popup_confirm">
    <div className="popup__container popup__container_confirm">
      <h3 className="popup__title popup__title_confirm">Вы уверены?</h3>
      <form className="popup__form popup__form_add" name="Popup"> 
        <button className="popup__save-button popup__save-button_confirm" type="submit">Да</button>
      </form>
      <button className="popup__close-button popup__close-button_confirm" type="button" aria-label="Close"></button>
    </div>
  </section>
  <section className="popup popup_image">
    <div className="popup__photo-container">
      <img className="popup__photo" src="#" alt=""></img>
      <p className="popup__photo-caption"></p>
      <button className="popup__close-button popup__close-button_photo" type="button" aria-label="Close"></button>
    </div>
  </section>
  </body>
  </div>
  );
}

export default App;
