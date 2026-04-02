import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  title: string;
  data: number[];
  unit?: string;
  color?: string;
};

export default function ChartCard({
  title,
  data,
  unit,
  color = "#16a34a",
}: Props) {
  const chartData = data.map((value, index) => ({
    name: `${index + 1}h`,
    value,
  }));

  return (
    <div className="bg-white rounded-3xl shadow p-4 w-full">

      <div className="w-full h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            
            <defs>
              <linearGradient id={`color-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.4}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>

            <XAxis dataKey="name" hide />

            <Tooltip
              formatter={(value: any) => `${value}${unit || ""}`}
              contentStyle={{
                borderRadius: "10px",
                border: "none",
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              fill={`url(#color-${title})`}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <p className="text-center mt-2 text-sm text-gray-500">
        Histórico 24h
      </p>
    </div>
  );
}