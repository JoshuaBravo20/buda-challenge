import {
  getTradesFromAGivenDateRange,
  getIncreasePercentage,
  calculateCommissionLoss
} from "./mainMethods.js";

// 1. Cálculo de la primera pregunta del desafío, volumen total en CLP de movimientos transados durante el "BlackBuda" del 1 de Marzo de 2024 entre las 12:00 y 13:00 horas:
getTradesFromAGivenDateRange(
  "2024-03-01T12:00:00-03:00",
  "2024-03-01T13:00:00-03:00",
  "btc-clp",
  "BTC"
);
// 6190412555.56 CLP

// ---------------------------------------------------------

// 2. Cálculo de la segunda pregunta del desafío, porcentaje de aumento en BTC entre el año anterior y este:
getIncreasePercentage();
// de 2.72 BTC a 0.61 BTC = -77.57%

// ---------------------------------------------------------

// 3. Cálculo de la tercera pregunta del desafío, cuánto se dejó de ganar en comisión durante el "BlackBuda":
calculateCommissionLoss();
// 495233004.44 CLP
