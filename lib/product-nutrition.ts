export const productNutrition = {
  servingSize: "15 ml (1 cucharada)",
  servingsPerContainer: "Aprox. 66 por envase de 1 L",
  rows: [
    { nutrient: "Energía", amount: "120 kcal", dailyValue: "6%" },
    { nutrient: "Grasa total", amount: "14 g", dailyValue: "18%" },
    { nutrient: "Grasa saturada", amount: "2 g", dailyValue: "10%" },
    { nutrient: "Grasa monoinsaturada", amount: "10 g", dailyValue: "—" },
    { nutrient: "Grasa poliinsaturada", amount: "2 g", dailyValue: "—" },
    { nutrient: "Carbohidratos", amount: "0 g", dailyValue: "0%" },
    { nutrient: "Proteínas", amount: "0 g", dailyValue: "0%" },
    { nutrient: "Sodio", amount: "0 mg", dailyValue: "0%" },
  ],
  ingredients: "100% aceite de oliva extra virgen.",
  storage:
    "Conservar en lugar fresco y seco, protegido de la luz solar. Cerrar bien el envase después de cada uso.",
  labelImage: "/producto/etiqueta-y-tabla-nutricional.jpg",
  labelImageAlt: "Etiqueta Don Santino e información nutricional del aceite de oliva extra virgen",
} as const;
