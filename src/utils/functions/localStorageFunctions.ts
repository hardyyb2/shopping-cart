export const saveToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key: string): any | null => {
  let items = localStorage.getItem(key);

  if (items) {
    return JSON.parse(items);
  }
  return null;
};
