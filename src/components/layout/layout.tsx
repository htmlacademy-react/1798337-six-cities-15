import { Outlet, useLocation} from 'react-router-dom';
import { AppRoute} from '../const';
// import { getAuthorizationStatus } from '../../utils/authtorization-status';
import Header from '../header';

// const getLayoutState = (pathname: AppRoute) => {
//   let rootClassName = '';
//   let linkClassName = '';
//   let shouldRenderUser = true;
//   let shouldRenderFooter = false;

//   if (pathname === AppRoute.Main) {
//     rootClassName = 'page--gray page--main';
//     linkClassName = 'header__logo-link--active';
//   } else if (pathname === AppRoute.Login) {
//     rootClassName = 'page--gray page--login';
//     shouldRenderUser = false;
//   } else if (pathname === AppRoute.Favorites) {
//     shouldRenderFooter = true;
//   }

//   return {rootClassName, linkClassName, shouldRenderUser, shouldRenderFooter};
// };

export default function Layout() {
  let shouldRenderFooter = false;
  const {pathname} = useLocation();
  // console.log(pathname);
  // console.log(AppRoute.Favorites)
  // const {rootClassName, linkClassName, shouldRenderUser, shouldRenderFooter} = getLayoutState(pathname as AppRoute);
  // const authorizationStatus = getAuthorizationStatus();
  if (pathname === AppRoute.Favorites) {
    shouldRenderFooter = true;
  }

  return (
    <>
      <Header pathname = {pathname} />
      <Outlet />
      {shouldRenderFooter ? (
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      ) : null}
    </>
  );
}
