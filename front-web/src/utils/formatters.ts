import { GenderData } from "../types/types";

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  }).format(price);
};

export const formatGenderLabel = (gendersLabel: GenderData) => {
  const genderTranslation = {
    MALE: "Masculino",
    FEMALE: "Feminino",
    OTHER: "Outros",
  };

  return genderTranslation[gendersLabel];
};
