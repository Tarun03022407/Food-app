import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Tn2iVsi64TWldAWP2-xWw1CXKU9XEmmLJW1XoqcQzQuQ4Hhb-xeKd2rRegd0RBBv2YwBryY_WsNNy_0hPDdB9MgPhPYHVNA8RIye4Pv5kqNi2LIjA194fbU3HSURZXYx",
  },
});
// yelp.get("/search")
