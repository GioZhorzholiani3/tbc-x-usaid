/* eslint-disable react/prop-types */
import classes from "./CourseItem.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

const CourseItem = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.courseImg}>
        <img src={props.onImg} alt="" />
      </div>
      <div className={classes.course}>
        <span>{props.onCourse}</span>
        <p>რეგისტრაცია დასრულებულია</p>
      </div>
      <div className={classes.details}>
        <div>
          <FaArrowRightLong className={classes.detailIcon} />
        </div>
        <div className={classes.detailP}>კურსის დეტალები</div>
      </div>
    </div>
  );
};

export default CourseItem;
