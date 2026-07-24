import "../../../css/ActivityLog.css";

interface Activity {
  id: number;
  title: string;
  description: string;
  time: string;
  type: "success" | "warning" | "danger" | "info";
}

interface ActivityLogProps {
  activities: Activity[];
}

export default function ActivityLog({
  activities,
}: ActivityLogProps) {
  return (
    <div className="activity-log">

      <div className="card-header">
        <h3>Recent Activity</h3>
      </div>

      <div className="activity-list">

        {activities.map((activity) => (

          <div
            className="activity-item"
            key={activity.id}
          >

            <div className={`activity-dot ${activity.type}`}></div>

            <div className="activity-content">

              <h4>{activity.title}</h4>

              <p>{activity.description}</p>

            </div>

            <span className="activity-time">
              {activity.time}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}