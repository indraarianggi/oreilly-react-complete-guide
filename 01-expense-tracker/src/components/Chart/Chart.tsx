import ChartBar from "./ChartBar";
import "./Chart.css";

export interface IChartDataPoint {
  label: string;
  value: number;
}

type TChartProps = {
  dataPoints: IChartDataPoint[];
};

const Chart = ({ dataPoints }: TChartProps) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
