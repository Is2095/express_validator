import app from "./servidor";

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor levantado en puerto: ${PORT}`);
  
})