import Footer from "../../Components/Footer";
import Header from "../../Components/Heder";
import Menu from "../../Components/Menu";
import "./Setting.css";
import { Switch } from "antd";

function SettingPage() {
  return (
    <div className="conteiner">
      <Header />
      <div className="setting-wrapper">
        <Menu />
        <div className="setting-colum">
          <h2>Profile</h2>
          <div className="setting-border">
            <div className="setting-data">
              <p>Name</p>
              <input placeholder="Name" />
            </div>
            <div className="setting-data">
              <p>Email</p>
              <input placeholder="Email" />
            </div>
          </div>
          <h2>Password</h2>
          <div className="setting-border">
            <div className="setting-data">
              <p>Password</p>
              <input placeholder="Password" />
            </div>
            <div className="setting-data">
              <p>New password</p>
              <input placeholder="New password" />
              <p>Confirm password</p>
              <input placeholder="Confirm password" />
            </div>
          </div>
          <h2>Color mode</h2>
          <div className="setting-border-mode">
            <div className="setting-mode">
              <span>Dark</span>
              <p>Use dark thema</p>
            </div>

            <Switch />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SettingPage;
