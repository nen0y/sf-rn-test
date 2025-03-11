import { View, Text, SafeAreaView, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "@/components/button";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { asyncStorageApi } from "@/utils/asyncStorageApi";
import { useRouter } from "expo-router";

const schema = yup.object().shape({
  title: yup.string().required("Назва товару обов'язкова"),
  description: yup.string().required("Опис товару обов'язковий"),
  price: yup.string().required("Ціна товару обов'язкова"),
});

export default function AddProductPage() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: {
    title: string;
    description: string;
    price: string;
  }) => {
    asyncStorageApi
      .addDataToStore("products", {
        ...data,
        id: `${Date.now()}${Math.floor(Math.random() * 10000)}`,
      })
      .then(() => {
        router.push("/");
      });
  };

  return (
    <SafeAreaView>
      <View className="p-4">
        <Text className="text-xl text-[#1E1F4B] pb-10">Додати товар</Text>
        <View className="flex gap-5">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Назва товару"
                className="p-4 py-3 placeholder:text-gray-400 bg-white"
                defaultValue=""
              />
            )}
            name="title"
            rules={{ required: true }}
          />
          {errors.title && (
            <Text className="text-red-500">{errors.title.message}</Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Опис товару"
                className="p-4 py-3 placeholder:text-gray-400 bg-white"
                defaultValue=""
              />
            )}
            name="description"
          />
          {errors.description && (
            <Text className="text-red-500">{errors.description.message}</Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Ціна товару"
                className="p-4 py-3 placeholder:text-gray-400 bg-white"
                defaultValue=""
              />
            )}
            name="price"
          />
          {errors.price && (
            <Text className="text-red-500">{errors.price.message}</Text>
          )}
          <Button onClick={handleSubmit(onSubmit)}>Додати товар</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
