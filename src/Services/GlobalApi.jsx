import axios from 'axios'
const key= '18801c3a672540faab7d20d3ce17ee3f'

const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'

})

const getGenreList= axiosCreate.get('/genres?key=' + key)
const getAllGames= axiosCreate.get('/games?key=' + key)
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)

export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId
}