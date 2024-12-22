import Pokemon from "../models/pokemon.model.js";

export const getPokemon = async (req, res) => { 
    const allPokemon = await Pokemon.find();
    res.status(200).json({message:"all pokemon",allPokemon});
};
export const getByIdPokemon = async (req, res) => { 
    const pokemonById = await Pokemon.findById(req.params.id); 
    try {
        if(!pokemonById) res.status(404).json({ message: "Pokemon not found"});
        res.status(200).json(pokemonById);
    } catch (error) {
        res.status(404).json({ message: "Pokemon not found"});
    }
};

export const createdPokemon = async (req, res) => {
    const {number, name, type, level} = req.body;
    try {
        if(!number||!name || !type|| !level)return res.status(400).json({ message: "data is missing"});
        const newPokemon = new Pokemon({
        number,
        name,
        type,
        level,
        trainerId: req.user.id,
        createdAt:Date.now()
    });
    const savedPokemon = await newPokemon.save();
    if(savedPokemon) return res.status(200).json({ message: "ok"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal error"});
    }
 }
export const updatePokemon = async (req, res) => { 
    const updatePokemonById = await Pokemon.findByIdAndUpdate(req.params.id , req.body, 
        {
            new : true
        });

    if(!updatePokemonById) res.status(404).json({ message: "Pokemon not found"});;

    res.json(updatePokemonById);
};

export const deletePokemon = async (req, res) => {
    const deletePokemonById = await Pokemon.findByIdAndDelete(req.params.id);

    console.log('deletePokemonById')

    if(!deletePokemonById) res.status(404).json({ message: "Pokemon not found"});;

    res.json(deletePokemonById);
 };