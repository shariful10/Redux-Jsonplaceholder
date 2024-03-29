import "./index.css";
import React from "react";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import router from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
