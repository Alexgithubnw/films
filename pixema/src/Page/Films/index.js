import "./films.css";
import Card from "../../Components/Card";
import Header from "../../Components/Heder";
import Menu from "../../Components/Menu";
import { getPost } from "../../API";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import { useSelector } from "react-redux";
import { selectValue } from "../../Components/Store/ValueSlice";

function Films() {
  const [post, setPost] = useState([]);
  const [filter, setFilter] = useState();
  const [from, setFrom] = useState();
  const [offset, setOffset] = useState(1);
  const navigate = useNavigate();
  const valueSearch = useSelector(selectValue);
  console.log(valueSearch);
  useEffect(() => {
    if (valueSearch === " ") {
      getPost("matrix").then((data) => {
        console.log(data?.Search);
        setPost(data?.Search);
      });
    } else {
      getPost(valueSearch).then((data) => {
        /* if (typeof data !== "undefined") {
          // вывести предупреждение что фильма нет
        } */
        console.log(data?.Search);
        setPost(data?.Search);
      });
    }
    /*  if (
       typeof valueSearch !== "undefined" &&
      valueSearch !== null 
    ) {
      getPost(valueSearch).then((data) => {
        if (typeof data !== "undefined") {
          // вывести предупреждение что фильма нет
        }
        console.log(data?.Search);
        setPost(data?.Search);
      });
    } else {
      getPost("matrix").then((data) => {
        console.log(data?.Search);
        setPost(data?.Search);
      });
    } */
  }, [valueSearch]);

  const handelShowMore = () => {
    setOffset((prev) => ++prev);
    getPost(valueSearch, offset).then((data) => {
      console.log(post);
      setPost((prev) => [...prev, ...data?.Search]);
    });
  };

  return (
    <div className="conteiner">
      <Header
        from={from}
        setFrom={setFrom}
        setPost={setPost}
        setFilter={setFilter}
        filter={filter}
      />
      <div className="films-wrapper">
        <Menu />
        <div className="films-main">
          <div className="Films-main-card">
            {!!post.length &&
              post.map((data) => {
                return (
                  <Card
                    Poster={data.Poster}
                    key={data.imdbID}
                    onClick={(e) =>
                      e.target
                        ? data.imdbID && navigate(`/Films/${data.imdbID}`)
                        : "no"
                    }
                    Title={data.Title}
                    Year={data.Year}
                    Type={data.Type}
                  />
                );
              })}
          </div>
          <div className="films-main-button">
            <button className="button-films" onClick={handelShowMore}>
              Show more
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Films;
