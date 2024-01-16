import { type FormEvent, useRef } from 'react';

import { CourseGoal } from '../App';

type NewGoalProps = {
  onAddGoal: (newGoal: CourseGoal) => void;
};

function NewGoal({ onAddGoal }: NewGoalProps) {
  // const [goalValue, setGoalValue] = useState('');
  // const [summaryValue, setSummaryValue] = useState('');

  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const title = goal.current!.value;
    const description = summary.current!.value;

    const newGoal: CourseGoal = {
      title,
      description,
      id: Math.random(),
    };

    e.currentTarget.reset();
    onAddGoal(newGoal);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input
          type='text'
          id='goal'
          ref={goal}
          // value={goalValue}
          // onChange={(e) => setGoalValue(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input
          type='text'
          id='summary'
          ref={summary}
          // value={summaryValue}
          // onChange={(e) => setSummaryValue(e.target.value)}
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
