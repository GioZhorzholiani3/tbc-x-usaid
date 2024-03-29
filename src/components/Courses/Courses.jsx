import CourseItem from "./CourseItem";
import classes from "./Courses.module.css";

const iOSDev =
  "https://static.wixstatic.com/media/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg";
const ReactCourse =
  "https://static.wixstatic.com/media/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg";
const IntroPython =
  "https://static.wixstatic.com/media/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg";
const AdvancedPython =
  "https://static.wixstatic.com/media/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg";
const AdvancedCyberSec =
  "https://static.wixstatic.com/media/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg";
const TOT =
  "https://static.wixstatic.com/media/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg";
const BlockCh =
  "https://static.wixstatic.com/media/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg";
const DevOps =
  "https://static.wixstatic.com/media/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg";
const ISG =
  "https://static.wixstatic.com/media/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg/v1/fill/w_375,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg";

const Courses = () => {
  return (
    <section className={classes.courseSection}>
      <div className={classes.container}>
        <p className={classes.courseParagraph}>სასწავლო კურსები</p>

        <div className={classes.courseContainer}>
          <CourseItem onImg={iOSDev} onCourse={"iOS Development"} />
          <CourseItem onImg={ReactCourse} onCourse={"React"} />
          <CourseItem onImg={IntroPython} onCourse={"Intro to Python"} />
          <CourseItem onImg={AdvancedPython} onCourse={"Advanced Python"} />
          <CourseItem
            onImg={AdvancedCyberSec}
            onCourse={"Advanced Cybersecurity Course"}
          />
          <CourseItem onImg={TOT} onCourse={"ToT - Training of Trainers"} />
          <CourseItem onImg={BlockCh} onCourse={"Blockchain"} />
          <CourseItem onImg={DevOps} onCourse={"DevOps"} />
          <CourseItem
            onImg={ISG}
            onCourse={"Information Security Governance"}
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
