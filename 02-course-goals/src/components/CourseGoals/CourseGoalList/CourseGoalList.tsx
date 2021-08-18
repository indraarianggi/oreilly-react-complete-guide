import { ICourseGoal } from "../../../App";
import CourseItem from "../CourseItem/CourseGoalItem";
import "./CourseGoalList.css";

type TCourseGoalList = {
  items: ICourseGoal[];
  onDeleteItem: (id: string) => void;
};

const CourseGoalList = ({ items, onDeleteItem }: TCourseGoalList) => {
  return (
    <ul className="goal-list">
      {items.map((goal) => (
        <CourseItem key={goal.id} goalId={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
