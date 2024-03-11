import "./menu.css";
import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Menu(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="menu-wrapper">
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
    </>
  );
}
export default Menu;
