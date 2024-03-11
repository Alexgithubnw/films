import "./card.css";

function Card(props) {
  return (
    <div className="post">
      <div className="post-img">
        {props.Poster !== "N/A" ? (
          <img
            className="post-img_img"
            src={props.Poster}
            alt="img"
            onClick={props.onClick}
          ></img>
        ) : (
          <img
            className="post-img_img"
            src={`https://v-hd.info/dlya-vzroslih/penthouse-polniy-dostup_penthouse-all-access/penthouse-polniy-dostup_penthouse-all-access.jpg`}
            alt="img"
            onClick={props.onClick}
          ></img>
        )}
        {/* <img
          className="post-img_img"
          src={props.Poster}
          alt="img"
          onClick={props.onClick}
        ></img> */}
      </div>
      <div className="post-content">
        <h2>{props.Title}</h2>

        <div className="post-date">
          <span>{props.Year}</span>
          <span>{props.Type}</span>
        </div>
      </div>
    </div>
  );
}
export default Card;
