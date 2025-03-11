import { asyncStorageApi } from "@/utils/asyncStorageApi";
import { useEffect, useState } from "react";

export function useProduct(id: string | string[]) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const product = await asyncStorageApi.getDataById(
          "products",
          id.toString()
        );

        if (product) {
          setProduct(product);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getProduct();
  }, [id]);

  return product;
}
