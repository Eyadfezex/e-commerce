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
    return res.data.data.doc; // Assuming the structure of the response contains the products in this path.
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error; // Propagate the error for further handling.
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
    return res.data.data; // Assuming the structure of the response contains the products and pagination info.
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Propagate the error for further handling.
  }
};

/**
 * Fetches new arrival products from the API.
 * If there are no new arrivals, it falls back to fetching the default products.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of new arrival products
 *                          or default products if none are available.
 * @throws Will throw an error if the fetch operation fails.
 */
export const getNewArrivalProducts = async () => {
  try {
    const res = await instance.get("/products/new");
    const products = res.data.data.product; // Assuming the structure of the response contains the new products in this path.

    if (!products || products.length === 0) {
      return getProducts(); // Fallback to fetching default products if none are new.
    } else {
      return products; // Return the new arrival products.
    }
  } catch (error) {
    console.error("Error fetching new arrival products:", error);
    throw error; // Propagate the error for further handling.
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
    const products = res.data.data.doc; // Assuming the structure of the response contains the top-selling products in this path.
    return products; // Return the top-selling products.
  } catch (error) {
    console.error("Error fetching top selling products:", error);
    throw error; // Propagate the error for further handling.
  }
};

/**
 * Fetches reviews from the API.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of reviews.
 * @throws Will throw an error if the fetch operation fails.
 */
export const getReviews = async () => {
  try {
    const res = await instance.get("/reviews");
    const reviews = res.data.data.doc; // Assuming the structure of the response contains the reviews in this path.
    return reviews; // Return the fetched reviews.
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error; // Propagate the error for further handling.
  }
};
