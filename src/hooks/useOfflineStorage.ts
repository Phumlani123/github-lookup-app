import React from "react";

interface IUseOfflineStorage {
  saveData: (key: string, data: any) => void;
  loadData: (key: string) => any;
}

export const useOfflineStorage = ():IUseOfflineStorage  => {

  const saveOfflineData = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const loadOfflineData = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  return {
    saveData: saveOfflineData,
    loadData: loadOfflineData
  }
};



