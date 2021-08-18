import { useState } from "react";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";

export interface ICourseGoal {
  id: string;
  text: string;
}

function App() {
  const [courseGoals, setCourseGoals] = useState<ICourseGoal[]>([
    { id: "g1", text: "Do all excercise!" },
    { id: "g2", text: "Finish the course!" },
  ]);

  const addGoalHandler = (enteredText: string) => {
    setCourseGoals((prevGoals) => {
      return [
        { id: Math.random().toString(), text: enteredText },
        ...prevGoals,
      ];
    });
  };

  const deleteItemHandler = (goalId: string) => {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalId);
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
