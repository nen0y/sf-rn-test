import Product from "@/components/product";
import { useProducts } from "@/hooks/useProducts";
import { Link } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from "react-native";

export default function Index() {
  const { products, loading } = useProducts();

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <SafeAreaView>
      <View className="p-4">
        <View className="flex flex-row items-center justify-between pb-10">
          <Text className="text-xl text-[#1E1F4B]"> Список товарів</Text>
          <Link href="/add-product">Додати товар</Link>
        </View>

        <FlatList
          contentContainerClassName="flex flex-col gap-5 pb-40"
          data={products}
          renderItem={({
            item,
          }: {
            item: {
              title: string;
              price: number;
              id: number;
              image: string;
            };
          }) => {
            return (
              <Product
                name={item.title}
                price={item.price}
                id={item.id}
                image={item.image}
              />
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
