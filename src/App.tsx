import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import './App.css'

function App() {

  return (
    <Box className="w-full h-screen bg-neutral-800/90 flex justify-center content-center">
      <Paper elevation={10} className="w-3/4 mt-10 mb-10">
        <Grid container spacing={1} rowSpacing={1}>
          <Grid item xs={12}>
            <span>Teste</span>
          </Grid>
          <Grid item xs={12}>
            <span>Teste 2</span>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default App
