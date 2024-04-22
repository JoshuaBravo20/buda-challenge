import axios from "axios";
const API_URL = "https://www.buda.com/api/v2/markets";

export function getFormattedResult(input) {
  return parseFloat(input.toFixed(2));
}

export async function triggerAPICall(timestamp, marketID) {
  const rawResponse = await axios.get(
    `${API_URL}/${marketID}/trades?timestamp=${parseInt(timestamp)}?limit=100`
  );
  return rawResponse.data.trades.entries;
}

export function getTotalTradeAmount(trades, referenceCurrency) {
  let total = 0;
  if (referenceCurrency === "CLP") {
    trades.forEach((tradeArray) => {
      const amountInCLP = parseFloat(parseFloat(tradeArray[2]).toFixed(2));
      total += amountInCLP;
    });
  } else if (referenceCurrency === "BTC") {
    trades.forEach((tradeArray) => {
      const amountInBTC = parseFloat(parseFloat(tradeArray[1]).toFixed(8));
      total += amountInBTC;
    });
  }
  return total;
}
