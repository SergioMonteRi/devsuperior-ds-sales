import { SalesByGenderData } from "../types/types";

export const buildSalesByGenderChart = (sales: SalesByGenderData[]) => {
  const labels = sales.map((sale) => sale.gender);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series,
  };
};
