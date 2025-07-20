import { useParams } from "react-router-dom";
import Info from "../components/Info";

function DetailPage() {
  const { id } = useParams();

  return (
    <div>
      <Info movieId={id} />
    </div>
  );
}

export default DetailPage;
