import { CourseGoal as CourseGoalsProps } from '../App';
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

type CourseGoalListProps = {
  goals: CourseGoalsProps[];
  onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  if (!goals.length)
    return (
      <InfoBox mode='hint'>
        You have no course goal else, start adding some
      </InfoBox>
    );
  return (
    <>
      {goals.length >= 4 && (
        <InfoBox mode='warning' severity='low'>
          You're collecting a lot of goals. Don't put too much on your plate!
        </InfoBox>
      )}
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
    </>
  );
}

export default CourseGoalList;
