import "./style.css";
import img from "../../imgs/iconoir_flash.svg";
import img1 from "../../imgs/iconoir_brain.svg";
import img2 from "../../imgs/iconoir_chat-remove.svg";
import img3 from "../../imgs/iconoir_eye-empty.svg";
const RightBack = () => {
  return (
    <>
      <div className="back1">
        <div className="back1_1">
          <div className="text1_1">
            <p>Summary</p>
          </div>
          <div className="stats">
            <ul>
              <li id="first">
                <div className="leftlist">
                  <img src={img} alt="Test" />
                  <p>Reaction</p>
                </div>
                <div>
                  <p>
                    80
                    <span
                      style={{ color: "rgba(48, 59, 89, 1)", opacity: "50%" }}
                    >
                      /100
                    </span>
                  </p>
                </div>
              </li>
              <li id="second">
                <div className="leftlist">
                  <img src={img1} alt="Test" />
                  <p>Memory</p>
                </div>
                <div>
                  <p>
                    92
                    <span
                      style={{ color: "rgba(48, 59, 89, 1)", opacity: "50%" }}
                    >
                      /100
                    </span>
                  </p>
                </div>
              </li>
              <li id="third">
                <div className="leftlist">
                  <img src={img2} alt="Test" />
                  <p>Verbal</p>
                </div>
                <div>
                  <p>
                    61
                    <span
                      style={{ color: "rgba(48, 59, 89, 1)", opacity: "50%" }}
                    >
                      /100
                    </span>
                  </p>
                </div>
              </li>
              <li id="fourth">
                <div className="leftlist">
                  <img src={img3} alt="Test" />
                  <p>Visual</p>
                </div>
                <div>
                  <p>
                    73
                    <span
                      style={{ color: "rgba(48, 59, 89, 1)", opacity: "50%" }}
                    >
                      /100
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="btn">
            <button>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default RightBack;
