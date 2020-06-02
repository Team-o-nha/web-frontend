import { useLocation } from "react-router-dom";

// A custom hook that builds on useLocation to parse
// the query string for you.
export const useQuery = () => new URLSearchParams(useLocation().search);

// usage:
// let query = useQuery();
// query.get("name")
