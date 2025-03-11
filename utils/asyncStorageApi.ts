import AsyncStorage from "@react-native-async-storage/async-storage";

export const asyncStorageApi = {
  storeData: async (
    value: string | number | boolean | object | Array<any>,
    key: string
  ) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error(e);
    }
  },
  getData: async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error(e);
    }
  },
  getDataById: async (key: string, id: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      return data
        ? data.find((item: { id: string }) => +item.id === +id)
        : null;
    } catch (e) {
      console.error(e);
    }
  },
  addDataToStore: async (key: string, value: object) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const data = jsonValue != null ? JSON.parse(jsonValue) : [];
      data.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  },
};
