import {
  getFormattedResult,
  triggerAPICall,
  getTotalTradeAmount,
} from "./utils.js";

export async function getTradesFromAGivenDateRange(
  date1,
  date2,
  marketID,
  referenceCurrency = "CLP"
) {
  // Definiendo el rango de fechas a consultar:
  const firstHour = new Date(date1).getTime();
  const endHour = new Date(date2).getTime();

  // Realizando las consultas a la API:
  const firstHourTrades = await triggerAPICall(firstHour, marketID);
  const endHourTrades = await triggerAPICall(endHour, marketID);

  // Calcuando total en CLP de movimientos transados en cada hora:
  const firstHourTradesTotal = getTotalTradeAmount(
    firstHourTrades,
    referenceCurrency
  );
  const endHourTradesTotal = getTotalTradeAmount(
    endHourTrades,
    referenceCurrency
  );

  // Calculando resultado total:
  const totalResultRaw = firstHourTradesTotal + endHourTradesTotal;
  return getFormattedResult(totalResultRaw);
}

export async function getIncreasePercentage() {
  const totalInBTC1 = await getTradesFromAGivenDateRange(
    "2023-03-01T12:00:00-03:00",
    "2023-03-01T13:00:00-03:00",
    "btc-clp",
    "BTC"
  );
  const totalInBTC2 = await getTradesFromAGivenDateRange(
    "2024-03-01T12:00:00-03:00",
    "2024-03-01T13:00:00-03:00",
    "btc-clp",
    "BTC"
  );

  const increase = totalInBTC2 - totalInBTC1;
  const percentage = ((increase / totalInBTC1) * 100).toFixed(2) + "%";
  return percentage;
}

export async function calculateCommissionLoss() {
    const totalInCLP = await getTradesFromAGivenDateRange(
      "2024-03-01T12:00:00-03:00",
      "2024-03-01T13:00:00-03:00",
      "btc-clp",
      "CLP"
    );
    const commission = totalInCLP * 0.08;
    return getFormattedResult(commission);
}
