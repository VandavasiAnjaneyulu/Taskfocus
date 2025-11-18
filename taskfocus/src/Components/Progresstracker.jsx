
export default function Progresstracker({ tasks }) {
  const completedTasks = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;
  const percentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="progress-tracker-wrapper">
      <h1>Progress Tracker Component</h1>

      <p>
        {completedTasks} of {totalTasks} tasks completed
      </p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
