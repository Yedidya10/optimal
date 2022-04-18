import { itemTemplate, itemImage } from "../utils/domConst.js";

export default class Item {
  constructor(data, itemSelector, { handleAddButtonClick }) {
    this._name = data.name;
    this._link = data.link;
    this._itemSelector = itemSelector;
    this._handleAddButtonClick = handleAddButtonClick;
  }

  _getItemTemplate() {
    this._itemtemplate = itemTemplate
      .querySelector(this._itemSelector)
      .cloneNode(true);
    return this._itemTemplate;
  }

  createItem = () => {
    this._itemElement = this._getItemTemplate();
    this._cardImage = itemImage;
    this._cardImageData = {
      src: this._link,
      alt: this._name
    }
    this._cardImage.setAttribute("src", this._cardImageData.src);
    this._cardImage.setAttribute("alt", this._cardImageData.alt);
    this._cardElement.querySelector(".card__name").textContent = this._name;

    this._setLikeButtonHandler();
    this._setTrashButtonHandler();
    this._handleCardClick(this._cardImage, this._cardImageData);

    return this._cardElement;
  }

  _handleLike = (evt) => {
    evt.target.classList.toggle("card__like_active");
  };

  _setLikeButtonHandler() {
    const cardLike = this._cardElement.querySelector(".card__like");
    cardLike.addEventListener("click", this._handleLike);
  }

  _handleDelete = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _setTrashButtonHandler() {
    const trashButton = this._cardElement.querySelector(".card__trash");
    trashButton.addEventListener("click", this._handleDelete);
  }
}
