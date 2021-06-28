import axios from 'axios'


export const getPokemonSprite = async (pokeN:number) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeN}`)
        return response
    } catch (error) {
        console.log(error);
        return error;
    }
}