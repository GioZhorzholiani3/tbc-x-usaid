import classes from "./Questions.module.css";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

import { useState } from "react";

const Questions = () => {
  const [firstQuestionIsClicked, setFirstQuestionIsClicked] = useState(false);
  const [secondQuestionIsClicked, setSecondQuestionIsClicked] = useState(false);
  const [thirdQuestionIsClicked, setThirdQuestionIsClicked] = useState(false);

  const firstQuestionClickHandler = () => {
    setFirstQuestionIsClicked(!firstQuestionIsClicked);
    setSecondQuestionIsClicked(false);
    setThirdQuestionIsClicked(false);
  };

  const secondQuestionClickHandler = () => {
    setSecondQuestionIsClicked(!secondQuestionIsClicked);
    setFirstQuestionIsClicked(false);
    setThirdQuestionIsClicked(false);
  };

  const thirdQuestionClickHandler = () => {
    setThirdQuestionIsClicked(!thirdQuestionIsClicked);
    setFirstQuestionIsClicked(false);
    setSecondQuestionIsClicked(false);
  };

  return (
    <section className={classes.questionSection}>
      <div className={classes.questionContainer}>
        <div className={classes.questionHeader}>
          <p>ხშირად დასმული კითხვები</p>
          <p>ყველა კითხვა</p>
        </div>
        <div className={classes.firstQuestion}>
          <div className={classes.question}>
            <p>როგორ ხდება კურსზე რეგისტრაცია და შერჩევა?</p>
            <p>
              {!firstQuestionIsClicked ? (
                <FaChevronDown onClick={firstQuestionClickHandler} />
              ) : (
                <FaChevronUp onClick={firstQuestionClickHandler} />
              )}
            </p>
          </div>
          {firstQuestionIsClicked && (
            <div className={classes.firstQuestionDetailContainer}>
              <p>კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:</p>
              <div className={classes.courseQuestionSteps}>
                <p>
                  <span>I ეტაპი </span> - პირველ ეტაპზე საჭიროა, შეავსო
                  სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც
                  განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის
                  დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.
                </p>
                <p>
                  <span>II ეტაპი </span>- შერჩევის მეორე ეტაპი კურსების მიხედვით
                  განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ
                  კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის
                  შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.
                </p>
                <p>
                  <span>III ეტაპი </span> - მესამე ეტაპი კურსების მიხედვით
                  განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული
                  ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი
                  ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის
                  წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური
                  დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.
                </p>
                <p>
                  <span>IV ეტაპი </span> - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს
                  გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით
                  გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი
                  ხელშეკრულება.
                </p>
              </div>
              <p>
                * სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით
                წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და
                გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა.
              </p>
            </div>
          )}
        </div>
        <div className={classes.secondQuestion}>
          <div className={classes.question}>
            <p>შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?</p>
            <p>
              {!secondQuestionIsClicked ? (
                <FaChevronDown onClick={secondQuestionClickHandler} />
              ) : (
                <FaChevronUp onClick={secondQuestionClickHandler} />
              )}
            </p>
          </div>
          {secondQuestionIsClicked && (
            <div className={classes.secondQuestionDetailContainer}>
              <p>
                TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ
                კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა
                Information Security და Python კურსებისა, სადაც Basic დონის
                გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.
              </p>
            </div>
          )}
        </div>
        <div className={classes.thirdQuestion}>
          <div className={classes.question}>
            <p>რა ღირს სწავლა პროგრამის ფარგლებში ?</p>
            <p>
              {!thirdQuestionIsClicked ? (
                <FaChevronDown onClick={thirdQuestionClickHandler} />
              ) : (
                <FaChevronUp onClick={thirdQuestionClickHandler} />
              )}
            </p>
          </div>
          {thirdQuestionIsClicked && (
            <div className={classes.thirdQuestionDetailContainer}>
              <p>
                პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია
                თიბისი ბანკისა და USAID-ის მიერ.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Questions;
