import { Get } from "./get"

export const autoSearchByLocation = async (location) => {
    const supermarkets = ["Waitrose", "Asda", "Tesco"]

    const requests = supermarkets.map(supermarket =>
        Get(`https://api.yelp.com/v3/businesses/search?location=${location}&term=${supermarket}&radius=1000&sort_by=best_match&limit=1`)
      );
    
      try {
        const responses = await Promise.all(requests);
        const data = responses.map(response => response.data);
        return data;
      } catch (error) {
        // Handle error
        console.error(error);
        return [];
      }
}