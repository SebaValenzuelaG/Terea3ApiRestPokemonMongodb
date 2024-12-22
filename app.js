import  express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import pokemonRoutes from "./routes/pokemon.routes.js";



const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());


app.use("/api", authRoutes)
app.use("/api", pokemonRoutes)
export default app;