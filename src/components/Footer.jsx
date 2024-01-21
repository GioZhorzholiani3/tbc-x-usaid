import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={classes.footerSection}>
      <div className={classes.footerContainer}>
        <div className={classes.footerLeft}>
          <div>
            <img
              src="https://static.wixstatic.com/media/dd97f4_86c58c47370442a889e9a4e9db4eb00c~mv2.png/v1/crop/x_1,y_0,w_426,h_123/fill/w_133,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%201%402x.png"
              alt=""
            />
          </div>
          <p>© 2023 ყველა უფლება დაცულია</p>
          <p>წესები და პირობები</p>
        </div>
        <div className={classes.footerRight}>
          <div className={classes.footerRightImgs}>
            <img
              src="https://static.wixstatic.com/media/ce6ec7c11b174c0581e20f42bb865ce3.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ce6ec7c11b174c0581e20f42bb865ce3.png"
              alt=""
            />
            <img
              src="https://static.wixstatic.com/media/71ac09a5a92848cc943bf2ca2a09a6d0.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/71ac09a5a92848cc943bf2ca2a09a6d0.png"
              alt=""
            />
          </div>
          <button className={classes.footerRightBtn}>მოგვწერეთ</button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
