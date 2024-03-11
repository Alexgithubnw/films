import "./film.css";
import { useEffect, useState } from "react";
import { getPost, getSinglPost } from "../../API";
import Header from "../../Components/Heder";
import Menu from "../../Components/Menu";
import Card from "../../Components/Card";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../../Components/Footer";

function Film() {
  let { FilmId } = useParams();
  const [film, setFilm] = useState({});
  const [post, setPost] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getSinglPost(FilmId).then((data) => {
      setFilm(data);
    });
    getPost("mat").then((data) => {
      setPost(data.Search);
      console.log(data.Search);
    });
  }, [FilmId]);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1900, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  console.log(post);
  const filmCard = post.map((data) => (
    <Card
      Poster={data.Poster}
      onClick={(e) =>
        e.target
          ? (FilmId = data.imdbID && navigate(`/Films/${data.imdbID}`))
          : "no"
      }
      Title={data.Title}
      Year={data.Year}
      Type={data.Type}
    />
  ));
  console.log(filmCard);
  return (
    <div className="conteiner">
      <Header />
      <div className="films-wrapper">
        <Menu />

        <div className="film-wrapper">
          <div className="film-content">
            <div className="film-img">
              <div className="film-img-description">
                <h2>{film.Title}</h2>
                <div className="film-img-description-reting">
                  <div className="film-description-reting_imDb">
                    {film.imdbRating}
                  </div>
                  <div className="film-description-reting_time">
                    {film.Runtime}
                  </div>
                </div>
              </div>
              {film.Poster !== "N/A" ? (
                <img className="film-img_img" src={film.Poster} alt="img" />
              ) : (
                <img
                  className="film-img_img"
                  src={`https://v-hd.info/dlya-vzroslih/penthouse-polniy-dostup_penthouse-all-access/penthouse-polniy-dostup_penthouse-all-access.jpg`}
                  alt="img"
                />
              )}
            </div>
            <div className="film-description">
              <h2>{film.Title}</h2>
              <div className="film-description-reting">
                <div className="film-description-reting_imDb">
                  {film.imdbRating}
                </div>
                <div className="film-description-reting_time">
                  {film.Runtime}
                </div>
              </div>
              <p>{film.Plot}</p>
              <div className="film-description-information">
                <div className="film-description-information-line">
                  <span className="film-description-information-line_title">
                    Year
                  </span>
                  <span>{film.Year}</span>
                </div>
                <div className="film-description-information-line">
                  <span className="film-description-information-line_title">
                    Released
                  </span>
                  <span>{film.Released}</span>
                </div>
                <div className="film-description-information-line">
                  <span className="film-description-information-line_title">
                    BoxOffice
                  </span>
                  <span>{film.BoxOffice}</span>
                </div>
                <div className="film-description-information-line">
                  <span className="film-description-information-line_title">
                    Country
                  </span>
                  <span>{film.Country}</span>
                </div>
                <div className="film-description-information-line">
                  <span className="film-description-information-line_title">
                    Production
                  </span>
                  <span>{film.Production}</span>
                </div>
                <div className="film-description-information-line">
                  <span className="film-description-information-line_title">
                    Actors
                  </span>
                  <span>{film.Actors}</span>
                </div>
                <div className="film-description-information-line">
                  <span className="film-description-information-line_title">
                    Director
                  </span>
                  <span>{film.Director}</span>
                </div>
                <div className="film-description-information-line">
                  <span className="film-description-information-line_title">
                    Writers
                  </span>
                  <span>{film.Writer}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="film-recomendations">
            <h2>Recomendations</h2>
            <Carousel responsive={responsive}>{filmCard}</Carousel>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Film;
