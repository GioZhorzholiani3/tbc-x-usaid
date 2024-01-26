import classes from "./Carousel.module.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // eslint-disable-next-line no-dupe-keys
    speed: 2000,
    autoplaySpeed: 4000,
  };

  return (
    <section className={classes.carouselSection}>
      <div className={classes.container}>
        <p className={classes.partners}>პროექტის პარტნიორები</p>
      </div>
      <div className={classes.carousel}>
        <Slider {...settings}>
          <div className={classes.imageWrapper}>
            <div className={classes.firstImg}>
              <img src="https://static.wixstatic.com/media/93e8a3_a356bb7d201f4f47870683655e9e4120~mv2.png/v1/fill/w_308,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%204_2x_edited.png" />
              <img src="https://static.wixstatic.com/media/93e8a3_eaf33552ffd5463e96a5f776dda00111~mv2.png/v1/fill/w_301,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/White%20horiz.png" />
              <img src="https://static.wixstatic.com/media/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png/v1/fill/w_313,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png" />
            </div>
          </div>
          <div className={classes.imageWrapper}>
            <div className={classes.secondImg}>
              <img src="https://static.wixstatic.com/media/93e8a3_b595f31239344928802dd7135813e17c~mv2.png/v1/fill/w_310,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tegeta%20logo%20geo.png" />
              <img src="https://static.wixstatic.com/media/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png/v1/fill/w_234,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png" />
              <img src="https://static.wixstatic.com/media/93e8a3_b6ed8fb2602e4670bc83d1fd4a7d9283~mv2.png/v1/fill/w_390,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MicrosoftTeams-image%20(9).png" />
            </div>
          </div>
          <div className={classes.imageWrapper}>
            <div className={classes.thirdImg}>
              <img src="https://static.wixstatic.com/media/93e8a3_ef7860c1a2854f1c8fc20f867ffa30ab~mv2.png/v1/fill/w_284,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UFC%20GEO%20PNG_edited.png" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
