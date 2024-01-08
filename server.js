import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
    // eslint-disable-next-line no-undef
    console.log("Servidor escutando!");
});