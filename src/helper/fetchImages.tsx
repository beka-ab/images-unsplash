import axios from "axios";

interface Image {
  id: string;
  urls: {
    thumb: string;
  };
  alt_description: string;
}

export const fetchImages = async (
  page = 1,
  perPage = 20,
  orderBy = "popular",
  searchTerm = ""
) => {
  let apiUrl = "https://api.unsplash.com/photos";
  if (searchTerm) {
    apiUrl = "https://api.unsplash.com/search/photos";
  }
  const response = await axios.get(apiUrl, {
    params: {
      client_id: "2N7FmY6e7nQnFyHbKP8TDTI9ZwRgaUzFz4VvSJspxOk",
      page,
      per_page: perPage,
      order_by: orderBy,
      query: searchTerm,
    },
  });
  console.log(response);
  if (searchTerm) {
    return response.data.results as Image[];
  } else {
    return response.data as Image[];
  }
};
