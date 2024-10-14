import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchReults from "./components/SearchReults";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "results",
          element: <SearchReults />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="flex flex-col h-screen overflow-hidden">
        <Head />
        <RouterProvider router={appRouter} />

        {/**
         *Head
         *Body
         * Sidebar
         *   MenuItems
         * MainContainer
         *   buttonlist
         *   videocontainer
         *     videocard
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
