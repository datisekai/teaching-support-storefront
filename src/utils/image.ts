export function getImage(value: string) {
  if (!value) {
    return "";
  }
  const image = "https://tsp-be.datisekai.id.vn/" + value;
  return image;
}
