
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="aspect-[2/3] overflow-hidden rounded-md">
      <Link to={`/detail/${item.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
  );
}

export default Card;
