import Swiper from "swiper";
import "swiper/css";
import { useEffect, useState } from "react";
import { getWeekTrendingMovies } from "../api";
import SwiperComponent from "./SwiperComponent";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const respon = await getWeekTrendingMovies();
        const responRandom = respon.sort(() => Math.random() - 0.5);
        setData(responRandom);
        console.log("Fetched data in Cards.jsx:", responRandom);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (data.length === 0) return <p className="text-white">잠시만요</p>;

  return (
    <div className="px-28">
      <SwiperComponent data={data} />
    </div>
  );
}

export default Cards;
