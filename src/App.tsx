import './App.css'
import {AppBar} from "./AppBar.tsx";
import {AppBarContents} from "./AppBarContents.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {AppBody} from "./AppBody.tsx";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <div className="h-screen bg-stone-900">
            <AppBar>
                <AppBarContents />
            </AppBar>
            <AppBody />
        </div>
    </ThemeProvider>
  )
}

export default App