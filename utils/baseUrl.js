const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://digimart-ap.now.sh"
    : "http://localhost:3000";

export default baseUrl;
