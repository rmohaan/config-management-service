import api from "./api";

export const fetchConfigs = async (): Promise<any[]> => {
    try {
        const response = await api.get('/configurations');  // GET request to /configurations endpoint
        return response.data;  // Returning the configurations received from the backend
    } catch (error) {
        // Log or handle the error as necessary
        console.error('Error fetching configurations:', error);
        throw error;  // Rethrow the error to be caught in the calling function
    }
};