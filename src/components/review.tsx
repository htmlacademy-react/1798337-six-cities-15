import { ReviewsList } from './reviews-list';
import {ReviewForm} from './review-form';

type reviewPropsType = {
  isAuth: boolean;
};

export default function Review(isAuth:reviewPropsType) {
  <>
    <ReviewsList />
    {isAuth && <ReviewForm/>}
  </>
}
