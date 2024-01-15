import { CourseGoal as CourseGoalsProps } from '../App';
import CourseGoal from './CourseGoal';

type CourseGoalListProps = {
  goals: CourseGoalsProps[];
  onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              onDeleteGoal={onDeleteGoal}
            >
              <p> {goal.description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}

export default CourseGoalList;
