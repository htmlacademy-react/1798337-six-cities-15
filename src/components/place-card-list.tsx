import { offerType } from '../mock/offers-mock';

import PlaceCard from './place-card';

function PlaceCardList(props: { offers: offerType[] }): JSX.Element {
  return (
    <>
      {props.offers.map((offer: offerType) => (
        <PlaceCard
          key = {offer.id}
          offer = {offer}
        />
      ))}
    </>
  );
}

export default PlaceCardList;
