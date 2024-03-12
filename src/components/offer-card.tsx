import { Link } from 'react-router-dom';
import { OfferType } from '../mock/offers-mock';
import { AppRoute } from './const';

type OfferCardPropsType = {
  offer:OfferType;
  handleHover: (offer?:OfferType) => void;
}

function OfferCard({offer, handleHover}:OfferCardPropsType): JSX.Element {

  const {id, title, type, price, isFavorite, isPremium, rating} = offer;

  const classFavoriteButton = isFavorite ? 'place-card__bookmark-button--active' : '';
  const ratingInProsent = `${rating * 20}%`;

  const handleMouseOn = () => {
    handleHover(offer);
  };

  const handleMouseOff = () => {
    handleHover();
  };

  return (
    <Link to={`${AppRoute.Offer}/${offer.id}`}>
      <article
        className="cities__card place-card"
        data-id={id}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseOff}
      >
        {isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : ''}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={''} width="260" height="200" alt="Place image" />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button ${classFavoriteButton} button`}type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref={'#icon-bookmark'}></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: ratingInProsent}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{title}</a>
          </h2>
          <p className="place-card__type">Apartment{type.charAt(0)}</p>
        </div>
      </article>
    </Link>
  );
}

export default OfferCard;
