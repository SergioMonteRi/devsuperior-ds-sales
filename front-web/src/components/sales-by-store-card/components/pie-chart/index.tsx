import ReactApexChart from "react-apexcharts";

import { buildPieChartConfig } from "./helpers";

import { formatGenderLabel } from "../../../../utils/formatters";

import { GenderData } from "../../../../types/types";

import "./styles.css";

type Props = {
  labels?: string[];
  series?: number[];
};

function PieChart({ labels = [], series = [] }: Props) {
  const formattedGenderLabels: string[] = labels.map((label) => {
    return formatGenderLabel(label as GenderData);
  });

  return (
    <ReactApexChart
      options={buildPieChartConfig(formattedGenderLabels)}
      type="donut"
      series={series}
      width={"300px"}
      height={"380"}
      className="pie-chart-container"
    />
  );
}

export default PieChart;
