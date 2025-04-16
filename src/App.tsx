import { Box, Stack } from "@mui/material";
import "./App.css";
import { SideMenu } from "./components/SideMenu";
import { AppNavbar } from "./components/AppNavBar";
import { Header } from "./components/Header";
import { MainGrid } from "./components/MainGrid";

function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* <SideMenu /> */}
        <AppNavbar />
        <Box component="main">
          <MainGrid />
        </Box>
      </Box>
    </div>
  );
}

export default App;
