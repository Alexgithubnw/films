import "../Modal/modal.css";
import {
  CloseOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MenuModal = ({ active, setActive }) => {
  const navigate = useNavigate();
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
            <h2>Menu</h2>
            <CloseOutlined
              style={{ fontSize: "20px", color: "#fff" }}
              onClick={() => setActive(false)}
            />
          </div>
          <p
            onClick={() => {
              navigate(`/Films`);
            }}
          >
            <HomeOutlined style={{ fontSize: "24px", color: "#fff" }} /> Home
          </p>

          <p
            onClick={() => {
              navigate(`/Setting`);
            }}
          >
            <SettingOutlined style={{ fontSize: "24px", color: "#fff" }} />{" "}
            Settings
          </p>
        </div>
      </div>
    </div>
  );
};
export default MenuModal;
