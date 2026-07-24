import "../../../css/QuickAction.css";

interface Action {
  id: number;
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

interface QuickActionsProps {
  actions: Action[];
}

export default function QuickActions({
  actions,
}: QuickActionsProps) {
  return (
    <div className="quick-actions">

      <div className="card-header">
        <h3>Quick Actions</h3>
      </div>

      <div className="action-grid">

        {actions.map((action) => (

          <button
            key={action.id}
            className="action-card"
            onClick={action.onClick}
          >

            <div className="action-icon">
              {action.icon}
            </div>

            <span>{action.title}</span>

          </button>

        ))}

      </div>

    </div>
  );
}