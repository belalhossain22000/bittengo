import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import axios from "axios";

const API_KEY = "AIzaSyDFWAkEG1B1wVp2mlJaI56lvigezrEuq1s";
const place_id = "ChIJrZjNMYYthEcR6pLgWBBZdSY";
const getGoogleReviews = async () => {
  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/details/json",
      {
        params: {
          place_id,
          fields: "reviews,user_ratings_total,name,formatted_address",
          key: API_KEY,
        },
      }
    );
    console.log(response.data.result );
    // Extract useful data from the response
    if (response.status === 200) {
      const { reviews, user_ratings_total } = response.data.result || {};
      
      console.log("Reviews:", reviews);
      console.log("Total Ratings:", user_ratings_total);
      return response.data.result
    } else {
      console.error(`Error: Received status ${response.status}`);
    }
   
  } catch (error: any) {
    console.log(error);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

export const GoogleReviews = { getGoogleReviews };
