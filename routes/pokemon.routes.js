import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getPokemon, getByIdPokemon, createdPokemon,updatePokemon, deletePokemon } from "../controllers/pokemon.controller.js";

const router = Router();

router.get('/listpokemon', getPokemon); //ok
router.get('/listpokemon/:id', getByIdPokemon);//ok
router.post('/createdpokemon', authRequired, createdPokemon);
router.put('/updatepokemon/:id', authRequired, updatePokemon);
router.delete('/deletepokemon/:id', authRequired, deletePokemon);

export default router