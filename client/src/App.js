import { ThemeProvider } from "styled-components";
import AppRouter from "./router";
import { darkTheme, GlobalStyles, lightTheme } from "./styles/GlobalStyles";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { theme } = useSelector((state) => state.theme);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        retry: true,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ToastContainer />
        <AppRouter />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
