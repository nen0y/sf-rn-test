import { useProduct } from "@/hooks/useProduct";

import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ActivityIndicator, View, Text } from "react-native";
import Product from "@/components/product";

export default function ProductPage() {
  const { id } = useLocalSearchParams();
  const product = useProduct(id) as {
    title: string;
    description: string;
    price: number;
    id: number;
    image: string;
  } | null;

  console.log(id);

  if (!product) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View className="p-4">
        <Text className="text-xl text-[#1E1F4B] pb-10"> Товар:</Text>
        <Product
          name={product.title}
          price={product.price}
          description={product.description}
          id={product.id}
          image={product.image}
        />
      </View>
    </SafeAreaView>
  );
}
