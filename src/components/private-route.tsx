import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from './const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export default function PrivateRoute({authorizationStatus, children}: PrivateRouteProps) {
  return(
    authorizationStatus === AuthorizationStatus.Authorization ?
      children :
      <Navigate to={AppRoute.Login}/>
  );
}

