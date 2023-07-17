import { useEffect, useMemo, useState } from "react";

import Filter from "./components/filter";
import Header from "./components/header";
import SalesByStoreCard from "./components/sales-by-store-card";

import { buildSalesByGenderChart } from "./utils/helpers";
import { buildFilterParams, makeRequest } from "./utils/requests";

import { FilterData, PieChartConfig, SalesByGenderData } from "./types/types";

import "./App.css";

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByGender, setSalesByGender] = useState<PieChartConfig | null>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  useEffect(() => {
    if (filterData) {
      makeRequest
        .get<SalesByGenderData[]>("/sales/by-gender", { params })
        .then((response) => {
          const newSalesByGenre = buildSalesByGenderChart(response.data);
          setSalesByGender(newSalesByGenre);
        });
    } else {
      setSalesByGender(null);
    }
  }, [filterData, params]);

  return (
    <div className="app-container">
      <Header />
      <div className="app-main-content-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByStoreCard
          labels={salesByGender?.labels}
          series={salesByGender?.series}
          filterData={filterData}
        />
      </div>
    </div>
  );
}

export default App;
