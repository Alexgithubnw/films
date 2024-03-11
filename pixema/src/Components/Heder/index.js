import "./header.css";
import { AlignRightOutlined, MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import MenuModal from "../MenuModal/menuModal";
import Modal from "../Modal";
import { useState } from "react";
import { getPost } from "../../API";
import { valueSearch, selectValue } from "../Store/ValueSlice";
import { useSelector, useDispatch } from "react-redux";

function Header({ filter, setPost, from, setFrom, setFilter }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const [modalActiveMenu, setModalActivMenu] = useState(false);
  const [modalActive, setModalActiv] = useState(false);
  const value = useSelector(selectValue);
  const handelClickLogo = () => {
    navigate(`/Films`);
  };
  const handelSearch = (event) => {
    if (event.key === "Enter") {
      navigate(`/Films`);
      dispatch(valueSearch(search));
      /* getPost(search).then((data) => {
        setPost(data?.Search);
        console.log(data?.Search);
      }); */
    }
  };

  const hendelClickMenuModal = () => {
    setModalActivMenu(true);
  };

  const hendelClickFilter = () => {
    setModalActiv(true);
  };

  const handelFilter = (e) => {
    setFilter(e.target.value);
    console.log(filter);
    getPost(value, null, filter).then((data) => {
      setPost(data?.Search);
      console.log(data?.Search);
    });
  };

  const handelShowResult = () => {
    getPost(value, null, null, from).then((data) => {
      setPost(data?.Search);
      console.log(data?.Search);
    });
  };
  return (
    <>
      <div className="header-wrapper">
        <div className="header-logo" onClick={handelClickLogo}>
          <span className="header-logo-left">pix</span>
          <span className="header-logo-right">ema</span>
        </div>
        <div className="header-right">
          <div className="header-search">
            <input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(event) => handelSearch(event)}
              type="text"
            />

            <AlignRightOutlined
              style={{ fontSize: "24px", color: "#323537" }}
              onClick={hendelClickFilter}
            />
          </div>
          <div className="header-users">
            <div className="users-avatar">AK</div>
            <p className="users-name">Aliaksandr Kulesh</p>
          </div>
        </div>
        <div className="header-menu">
          <MenuOutlined
            style={{ fontSize: "24px", color: "#323537" }}
            onClick={hendelClickMenuModal}
          />
        </div>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActiv}
        from={from}
        setFrom={setFrom}
        handelShowResult={handelShowResult}
        handelFilter={handelFilter}
        setFilter={setFilter}
      />
      <MenuModal active={modalActiveMenu} setActive={setModalActivMenu} />
    </>
  );
}

export default Header;
