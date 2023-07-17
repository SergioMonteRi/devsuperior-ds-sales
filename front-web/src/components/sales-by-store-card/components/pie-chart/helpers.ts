import { ApexOptions } from "apexcharts";

export const buildPieChartConfig = (labels: string[] = []) => {
  return {
    labels,
    noData: {
      text: "Sem resultados",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#b4bed2",
        fontSize: "18px",
        fontFamily: "Roboto, sans-serif",
      },
    },
    colors: ["#FF7A00", "#7234F5", "#FF0000"],
    legend: {
      show: true,
      floating: false,
      position: "bottom",
      offsetY: 10,
      labels: {
        colors: ["#8D8D8D"],
      },
      fontFamily: "Roboto, sans-serif",
      fontSize: "18px",
      itemMargin: {
        vertical: 10,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (value: number) {
        const formattedNumber: string = value.toFixed(2);
        return formattedNumber + "%";
      },
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: "60%",
          labels: {
            show: true,
            name: {
              show: false,
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: "24px",
              color: "#ABB1C0",
              fontFamily: "Roboto, sans-serif",
              formatter: function () {
                return "";
              },
            },
          },
        },
      },
    },
    chart: {
      height: "400px",
    },
  } as ApexOptions;
};
