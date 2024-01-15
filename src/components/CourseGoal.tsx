import { type ReactNode } from 'react';

type CourseGoalProps = {
  title: string;
  children: ReactNode;
  id: number;
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoal({
  title,
  children,
  id,
  onDeleteGoal,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDeleteGoal(id)}>Delete</button>
    </article>
  );
}
