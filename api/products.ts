export default async function getProductsList() {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching data:", error));
}
