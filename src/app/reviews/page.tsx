import { ReviewCard } from "../components";
import reviewsData from '../assets/reviews.json'

function Reviews() {
  return (
    <div className="review_container">
      <h1>
        Our Student <span>Reviews</span>
      </h1>
      <div className="review_cards_wrapper">
        {reviewsData && reviewsData.reviews.map((item, index) => (
          <ReviewCard
            key={index}
            username={item.username}
            qualification={item.qualification}
            imgUrl={item.imgUrl}
            review={item.review}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
