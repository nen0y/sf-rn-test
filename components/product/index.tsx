import { Link } from "expo-router";
import { Image, View, Text, TouchableOpacity } from "react-native";

interface ProductProps {
  name: string;
  price: number;
  id: number;
  image: string;
  description?: string;
}

export default function Product({
  name,
  price,
  id,
  image,
  description,
}: ProductProps) {
  return (
    <Link href={`/product/${id}`}>
      <View className="bg-white shadow-xs w-full rounded-xl p-5">
        {image && (
          <Image
            className="w-full h-[180px] rounded-xl"
            source={{
              uri: image,
            }}
            resizeMode="contain"
          />
        )}
        <View>
          <Text className="pt-3 pb-6 text-base">{name}</Text>
          {description && <Text className="pb-6 text-sm">{description}</Text>}
          <Text className="text-2xl">{price}$</Text>
        </View>
      </View>
    </Link>
  );
}
