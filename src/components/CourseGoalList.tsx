import { CourseGoal as CourseGoalsProps } from '../App';
import CourseGoal from './CourseGoal';

type CourseGoalListProps = {
  goals: CourseGoalsProps[];
};

function CourseGoalList({ goals }: CourseGoalListProps) {
  //function handleDeleteGoal() {}
  return (
    <ul>
      {goals.map(({ id, title, description }) => {
        return (
          <li key={id}>
            <CourseGoal title={title}>
              <p> {description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}

export default CourseGoalList;
