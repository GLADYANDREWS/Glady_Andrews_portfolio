// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";

// createRoot(document.getElementById("root")!).render(<App />);



// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import { AppToaster } from "@/components/ui/sonner"; // or "@/components/sonner"
// import { Toaster } from "@/components/ui/sonner";

// createRoot(document.getElementById("root")!).render(
//   <>
//     <App />
//     <AppToaster />
//   </>
// );



import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
