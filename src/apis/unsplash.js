import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID i9iN7L7ZtXvD3iQW32Woc9UrND7eKWqK12mDrAquQo8",
  },
});
