import { useEffect, useState } from "react";
import { getMovieDetial } from "../api";

function formatDate(dateString) {
  if (!dateString || dateString === "0000-00-00") {
    return "0000년 00월 00일";
  }

  return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/, "$1년 $2월 $3일");
}

function Info({ movieId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const tm = await getMovieDetial(movieId);
        setData(tm);

        
      } catch (error) {
        
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="w-[70%]  h-screen -z-10 overflow-hidden relative left-0">
        <img
          className="object-cover h-screen "
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt=""
        />
        <div className="w-full h-screen bg-black/10 absolute z-20 top-0  gd"></div>
      </div>

      <div className="absolute bottom-16 left-16 w-[600px] text-justify flex flex-col gap-4">
        <p className="text-nowrap text-7xl text-white">{data.title}</p>
        {/* {data.genres.map((item) => (
            <span>{item.name}</span>
          ))} */}
        <div className="flex gap-10">
          <p className="text-xl text-white">
            {formatDate(data.release_date)} 개봉
          </p>
          <p className="text-xl text-white">{data.runtime} 분</p>
        </div>
        <p className="text-xl text-white">{data.overview}</p>
      </div>
    </>
  );
}

export default Info;
