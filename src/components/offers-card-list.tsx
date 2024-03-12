import { OfferType } from '../mock/offers-mock';
import { Nullable } from 'vitest';
import { useEffect, useState } from 'react';
import OfferCard from './offer-card';

function OffersCardList(props: { offers: OfferType[] }): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<OfferType>>(null);
  const handleOfferHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

  useEffect(() => console.log(activeOffer));

  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((offer) => (
        <OfferCard
          key = {offer.id}
          offer = {offer}
          handleHover = {handleOfferHover}
        />
      ))}
    </div>
  );
}

export default OffersCardList;
