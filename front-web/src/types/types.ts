export type StoreData = {
  id: number;
  name: string;
};

export type SalesByGenderData = {
  sum: number;
  gender: string;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

export type FilterData = {
  id: number;
};

export type SalesSummaryData = {
  sum: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type GenderData = "FEMALE" | "MALE" | "OTHER";
