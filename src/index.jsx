import React from "react";
import ReactDOM from "react-dom/client";
import App from "./common/App";
import { QueryClientProvider, QueryClient } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider contextSharing={true} client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
