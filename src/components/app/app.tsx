import MainPage from '../../pages/main-page';
import { offerType } from '../../mock/offers-mock';

type Offers = {
  offers: offerType[];
}

function App({offers} : Offers): JSX.Element {
  return (
    <MainPage offers = {offers} />
  );
}

export default App;
