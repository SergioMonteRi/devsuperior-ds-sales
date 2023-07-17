import { useEffect, useMemo, useState } from "react";

import PieChart from "./components/pie-chart";

import { formatPrice } from "../../utils/formatters";
import { buildFilterParams, makeRequest } from "../../utils/requests";

import { FilterData, SalesSummaryData } from "../../types/types";

import "./styles.css";

type Props = {
  labels?: string[];
  series?: number[];
  filterData?: FilterData;
};

const initialSummary: SalesSummaryData = {
  avg: 0,
  count: 0,
  max: 0,
  min: 0,
  sum: 0,
};

function SalesByGenderCard({ labels, series, filterData }: Props) {
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    if (params.storeId) {
      makeRequest
        .get<SalesSummaryData>("/sales/summary", { params })
        .then((response) => {
          setSummary(response.data);
        });
    } else {
      setSummary(initialSummary);
    }
  }, [params]);

  return (
    <div className="sales-by-store-container base-card">
      <div className="sales-by-store-total-sale-data">
        <h1 className="sales-by-store-total-value">
          {formatPrice(summary.sum)}
        </h1>
        <span className="sales-by-store-data-description">Total de vendas</span>
      </div>
      <PieChart labels={labels} series={series} />
    </div>
  );
}

export default SalesByGenderCard;
