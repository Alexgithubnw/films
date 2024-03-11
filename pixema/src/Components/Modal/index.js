import "./modal.css";
import React from "react";
import { CloseOutlined } from "@ant-design/icons";


const Modal = ({
  active,
  setActive,
  from,
  setFrom,
  handelShowResult,
  handelFilter,

}) => {

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="content-filter">
          <div className="filter-title">
            <h2>Filters</h2>
            <CloseOutlined
              style={{ fontSize: "20px", color: "#fff" }}
              onClick={() => setActive(false)}
            />
          </div>
          <div className="filter-year">
            <h3>Years</h3>
            <input
              placeholder="Years"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              type="text"
            />
            <button className="filter-button" onClick={handelShowResult}>
              Show result
            </button>
          </div>
          <div className="filter-sorting">
            <h3>Sorting</h3>
            <div className="filter-sorting-button">
              <button
                className="filter-button"
                value={"movie"}
                onClick={(e) => handelFilter(e, "value")}
              >
                Movie
              </button>
              <button
                className="filter-button"
                value={"series"}
                onClick={(e) => handelFilter(e, "value")}
              >
                Series
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
