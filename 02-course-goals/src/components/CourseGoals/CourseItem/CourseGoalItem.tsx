import "./CourseGoalItem.css";

type TCourseItemProps = {
  goalId: string;
  onDelete: (id: string) => void;
  children: React.ReactNode;
};

const CourseItem = ({ goalId, onDelete, children }: TCourseItemProps) => {
  const deleteHandler = () => {
    onDelete(goalId);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseItem;
