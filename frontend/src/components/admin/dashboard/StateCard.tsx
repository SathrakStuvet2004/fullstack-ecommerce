import "../../../css/stateCard.css"
import type { ReactNode } from "react";

export interface StatCardData {
  title: string;
  value: number | string;
  subtitle: string;
  icon: ReactNode;
  trend?: string;
  trendType?: "up" | "down";
}

interface StatCardProps {
  data: StatCardData;
}

export default function StatCard({ data }: StatCardProps) {
  return (
    <div className="stat-card">

      <div className="stat-card-header">

        <div className="stat-card-icon">
          {data.icon}
        </div>

        {data.trend && (
          <span className={`stat-card-trend ${data.trendType ?? "up"}`}>
            {data.trendType === "down" ? "▼" : "▲"} {data.trend}
          </span>
        )}

      </div>

      <div className="stat-card-body">

        <h2>{data.value}</h2>

        <h4>{data.title}</h4>

        <p>{data.subtitle}</p>

      </div>

    </div>
  );
}