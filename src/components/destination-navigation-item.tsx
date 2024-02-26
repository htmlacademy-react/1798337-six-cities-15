function DestinationsNavigationItem(props: {destination: string}): JSX.Element {

  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{props.destination}</span>
      </a>
    </li>
  );
}

export default DestinationsNavigationItem;
