import classes from "./Info.module.css";

const Info = () => {
  return (
    <div className={classes.infoContainer}>
      <div className={classes.infoText}>
        <p className={classes.innerText}>
          „ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა საინფორმაციო
          ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ
          ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს სხვადასხვა ICT მიმართულებით.
          წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა
          და მის პარტნიორ კომპანიებში.
        </p>
        <span className={classes.infoSpan}>გაიგე მეტი</span>
      </div>
    </div>
  );
};

export default Info;
