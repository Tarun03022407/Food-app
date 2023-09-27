
import  { useEffect, useState } from "react";
import yelp from "../api/yelp";
export default  ()=>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        searchApi("pasta");
      }, []);
    const searchApi = async (searchTerm) => {
      try {
        const response = await yelp.get("/search", {
          params: {
            limit: 50,
            term: searchTerm,
            location: "san jose",
          },
        });
        setResults(response.data.businesses);
    } catch (error) {
        setErrorMessage("Something went wrong");
    }
};
// console.log(results.length);
    return [results,searchApi,errorMessage]
}
    