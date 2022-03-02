export type DataType = {
  title: string;
  post: string;
  isHeaderOn: boolean;
  header: string;
  isImageOn: boolean;
  image: string | null;
};

export const saveDataToLocalStorage = (data: DataType) => {
  localStorage.setItem("data", JSON.stringify(data));
};

export const getDataFromLocalStorage = (): DataType | undefined => {
  const stringyfiedData = localStorage.getItem("data");
  if (stringyfiedData) {
    const data = JSON.parse(stringyfiedData);
    return data;
  }
  return undefined;
};

// export const getBase64 = (file: File | null) => {
//   let baseURL = null;
//   const reader = new FileReader();
//   if (file) reader.readAsDataURL(file);
//   reader.onload = () => {
//     baseURL = reader.result as string;
//   };
// };
