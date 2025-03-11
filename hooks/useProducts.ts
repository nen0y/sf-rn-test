import { useState, useEffect } from "react";
import { asyncStorageApi } from "@/utils/asyncStorageApi";
import getProductsList from "@/api/products";
import { useIsFocused } from "@react-navigation/native";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const storedData = await asyncStorageApi.getData("products");

        if (storedData) {
          setProducts(storedData);
        } else {
          const apiData = await getProductsList();
          await asyncStorageApi.storeData(apiData, "products");
          setProducts(apiData);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [isFocused]);

  return { products, loading };
}
