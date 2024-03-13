import ReviewForm from './review-form';
import ReviewsList from './reviews-list';

type reviewPropsType = {
  isAuth: boolean;
};

export default function Review(isAuth:reviewPropsType) {
  return(
    <>
      <ReviewsList />
      {isAuth && <ReviewForm />}
    </>
  );
}
