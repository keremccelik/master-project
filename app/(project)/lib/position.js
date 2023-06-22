export async function getPosition(coordinates) {
  const [latStr, longStr] = coordinates.split(",").map((coord) => coord.trim());
  const latitude = parseFloat(latStr);
  const longitude = parseFloat(longStr);
  return { latitude, longitude };
}
