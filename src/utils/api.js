import { apiSettings } from "./utils.js";
class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _makeRequest = (url, options = {}) => {
      return fetch(url, options)
      .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    }

    getProfileInfo() {
      return this._makeRequest(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
  } 

    getInitialCards() {
      return this._makeRequest(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
  } 

    editProfile(name, about) {
      return this._makeRequest(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name,
          about
        })
      })
    }

   editAvatar(avatar) {
    return this._makeRequest(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
  }

    addCard(name, link) {
      return this._makeRequest(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name,
          link
        })
      })
    }

    deleteCard(id) {
      return this._makeRequest(`${this._baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: this._headers
      })
    }

    deleteLike(id) {
      return this._makeRequest(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this._headers
      })
    }

    addLike(id) {
      return this._makeRequest(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'PUT',
        headers: this._headers
      })
    }
  }
   
const api = new Api(apiSettings); 
export default api;