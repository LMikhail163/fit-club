import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <section className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="man" />
            <img src={image2} alt="man" />
            <img src={image3} alt="man" />
            <img src={image4} alt="man" />
        </div>

        <div className="right-r">
            <span>some reasons</span>

            <div>
            <span className="stroke-text">why </span>
            <span>choose us?</span>
            </div>

            <div className="details-r">
            <div>
                <img src={tick} alt="tick"></img>
                <span>over 140+ expert coachs</span>
            </div>

            <div>
                <img src={tick} alt="tick"></img>
                <span>train smarted and faster then before</span>
            </div>

            <div>
                <img src={tick} alt="tick"></img>
                <span>1 free program for new member</span>
            </div>

            <div>
                <img src={tick} alt="tick"></img>
                <span>reliable partners</span>
            </div>
            </div>

            <span style={{
                color: 'var(--gray)',
                fontWeight: 'normal'
            }}>our partners</span>

            <div className="partners">
                <img src={nb} alt="newBalance" />
                <img src={adidas} alt="adidas" />
                <img src={nike} alt="nike" />
            </div>
        </div>
    </section>
  );
};

export default Reasons;
