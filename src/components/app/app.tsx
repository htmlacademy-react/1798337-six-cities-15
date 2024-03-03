import MainPage from '../../pages/main-page';
import FavoritePage from '../../pages/favorites-page';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import NotFoundPage from '../../pages/not-found-page';

import { OfferType } from '../../mock/offers-mock';
import { AppRoute, AuthorizationStatus } from '../const';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

type Offers = {
  offers: OfferType[];
}

function App({offers} : Offers): JSX.Element {

  const authorizationStatus = AuthorizationStatus.NoAuthorization;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          // index
          path={AppRoute.Main}
          element={<MainPage offers = {offers} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritePage />}
        />
        {/* <PrivateRoute authorizationStatus={authorizationStatus}> */}
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        {/* </PrivateRoute> */}

        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path={'*'}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
