import axios from "axios";

// Create an Axios instance with base URL

// https://everestgreenscapegroup.com/backend/api.php?type=banner&status=active
const egsClient = axios.create({
  baseURL: "https://everestgreenscapegroup.com/backend", // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// API service functions
const ApiService = {
  getBanner: () => egsClient.get("api.php?type=banner&status=active"),
  getServices: () => egsClient.get("api.php?type=services&status=active")
};

export default ApiService;
