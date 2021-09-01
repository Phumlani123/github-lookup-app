interface IUseOfflineStorage {
  saveData: (key: string, data: any) => void;
  loadData: (key: string) => any;
}

export const useOfflineStorage: () => IUseOfflineStorage = () => {

  return {
  }
}