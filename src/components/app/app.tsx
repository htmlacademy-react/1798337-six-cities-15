import MainPage from '../../pages/main-page';

type OffersCountProps = {
  offersCount: number;
}

function App({offersCount} : OffersCountProps): JSX.Element {
  return (
    <MainPage offersCount = {offersCount} />
  );
}

export default App;
