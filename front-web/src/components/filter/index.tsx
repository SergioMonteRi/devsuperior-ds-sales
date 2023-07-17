import Select from "react-select";
import { useEffect, useState } from "react";

import { makeRequest } from "../../utils/requests";
import { FilterData, StoreData } from "../../types/types";

import "./styles.css";

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [stores, setStores] = useState<StoreData[]>();

  useEffect(() => {
    makeRequest.get<StoreData[]>("/stores").then((response) => {
      setStores(response.data);
    });
  }, []);

  return (
    <div className="filter-container base-card">
      <Select
        options={stores}
        getOptionLabel={(store: StoreData) => store.name}
        getOptionValue={(store: StoreData) => String(store.id)}
        onChange={(value) => onFilterChange(value as FilterData)}
        placeholder={"Selecione uma loja"}
        isClearable
      />
    </div>
  );
}

export default Filter;
