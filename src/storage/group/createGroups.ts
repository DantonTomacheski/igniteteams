import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { getAllGroups } from "./getAllGroups";

async function createGroup(newGroup: string) {
  try {
    const storedGroup = await getAllGroups();

    const storage = JSON.stringify([...storedGroup, newGroup]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}

export { createGroup };
