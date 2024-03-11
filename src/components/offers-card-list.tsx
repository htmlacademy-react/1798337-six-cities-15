import { OfferType } from '../mock/offers-mock';

import PlaceCard from './offer-card';

function OffersCardList(props: { offers: OfferType[] }): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<OfferType>>(null);
  const handleOfferHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((offer: OfferType) => (
        <PlaceCard
          key = {offer.id}
          offer = {offer}
        />
      ))}
    </div>
  );
}

export default OffersCardList;
