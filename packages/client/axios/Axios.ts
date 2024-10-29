import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:10000/v1",
  timeout: 10000,
});

export const getAllProducts = async () => {
  const res = await instance.get("/products");
  return res.data.data.doc;
};

// Function to get new arrival products filtered by date

export const getNewArrivalProducts = async () => {
  const res = await instance.get("/products");
  const products = res.data.data.doc;
  const currentDate = new Date();
  const filterDate = new Date();
  filterDate.setDate(currentDate.getDate() - 10);

  const newArrivalProducts = products.filter((product: any) => {
    const productDate = new Date(product.createdAt);
    return productDate >= filterDate;
  });
  return newArrivalProducts;
};
