import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Task } from "./screens/Task";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Task />
  </StrictMode>
);
