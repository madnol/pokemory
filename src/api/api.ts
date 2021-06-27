import axios from 'axios'


const RANDOM_NUMBER = Math.ceil(Math.random() * 100)



export const getPokemonList = async () => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${RANDOM_NUMBER}&limit=8`);
        console.log(RANDOM_NUMBER)
        return response.data;
    } catch (error) {
        console.log(error)
        return error;
    }
}

export const getPokemonSprite = async (pokeN:number) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeN}`)
        return response
    } catch (error) {
        console.log(error);
        return error;
    }
}