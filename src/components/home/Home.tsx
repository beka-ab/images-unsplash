import "./home.scss";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { fetchImages } from "../../helper/fetchImages";

const queryClient = new QueryClient();

interface HomeProps {
  searchTerm: string;
}

const Home: React.FC<HomeProps> = ({ searchTerm }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: () => fetchImages(1, 20, "popular", searchTerm),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!data) {
    return <p>No data available</p>;
  }
  return (
    <div>
      <ul className="lists">
        {data.map((image) => (
          <li className="list" key={image.id}>
            <img
              className="image"
              src={image.urls.thumb}
              alt={image.alt_description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
const UnsplashImagesContainer = ({ searchTerm }: { searchTerm: string }) => (
  <QueryClientProvider client={queryClient}>
    <Home searchTerm={searchTerm} />
  </QueryClientProvider>
);
export default UnsplashImagesContainer;
