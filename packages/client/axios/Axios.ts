"use server";
import axios from "axios";

// Create an instance of axios with a base URL and timeout settings
const instance = axios.create({
  baseURL: "http://127.0.0.1:10000/v1",
  timeout: 10000,
});

/**
 * Fetches all products from the API.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of all products.
 * @throws Will throw an error if the fetch operation fails.
 */
export const getAllProducts = async () => {
  try {
    const res = await instance.get("/products");
    return res.data.data.doc;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
};

/**
 * Fetches a paginated list of products from the API.
 *
 * @param {number} limit - The number of products to fetch (default is 10).
 * @param {number} page - The page number to fetch (default is 1).
 * @returns {Promise<Object>} A promise that resolves to an object containing the products and pagination info.
 * @throws Will throw an error if the fetch operation fails.
 */
export const getProducts = async (limit = 10, page = 1) => {
  try {
    const res = await instance.get(`/products?limit=${limit}&page=${page}`);
    return res.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

/**
 * Fetches new arrival products from the API.
 * If there are no new arrivals, it falls back to fetching the default products.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of new arrival products or default products if none are available.
 * @throws Will throw an error if the fetch operation fails.
 */
export const getNewArrivalProducts = async () => {
  try {
    const res = await instance.get("/products/new");
    const products = res.data.data.product;

    if (!products || products.length === 0) {
      return getProducts();
    } else {
      return products;
    }
  } catch (error) {
    console.error("Error fetching new arrival products:", error);
    throw error;
  }
};

/**
 * Fetches top-selling products from the API, sorted by ratings.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of top-selling products.
 * @throws Will throw an error if the fetch operation fails.
 */
export const getTopSelling = async () => {
  try {
    const res = await instance.get(
      "/products?sort=ratingsQuantity,ratingsAverage"
    );
    const products = res.data.data.doc;
    return products;
  } catch (error) {
    console.error("Error fetching top selling products:", error);
    throw error;
  }
};
