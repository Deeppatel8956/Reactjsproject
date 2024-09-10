// import axios from "axios";

// export const getCategoryMovies=async(API_URL)=>{
// try {
//     const responce=await axios.get(API_URL)
//     return responce.data
// } catch (error) {
//     console.log("Error in API",error.message)
//     return error.responce.data
// }
// }

import axios from "axios";

export const getCategoryMovies = async (API_URL) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log("Error in API", error.message);
    // Return a more informative error response or handle it as needed
    return { error: error.message };
  }
};
