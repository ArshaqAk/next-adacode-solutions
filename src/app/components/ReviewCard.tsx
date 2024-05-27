import { ImQuotesLeft } from "react-icons/im";


interface ReviewCardProps {
    username:string;
    qualification:string;
  imgUrl:string;
  review:string;
}

const ReviewCard:React.FC<ReviewCardProps> = ({username,qualification,imgUrl,review}) => {
  return (
    <div className="review_card_container">
      <ImQuotesLeft />
      <p>
        {review}
      </p>
      <div className="user_info">
        <img src={imgUrl} />
        <div className="user_header">
          <h3>{username}</h3>
          <p>{qualification}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
