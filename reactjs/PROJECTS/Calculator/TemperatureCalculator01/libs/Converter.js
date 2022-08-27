export function toCelcius(F) {
  return ((F - 32) * 5) / 9;
}

export function toFahrenheight(C) {
  return (C * 9) / 5 + 32;
}

export function convert(temperature, convertTo) {
  const output = convertTo(temperature);
  const round = Math.round((output * 1000) / 1000);
  return round.toString();
}
