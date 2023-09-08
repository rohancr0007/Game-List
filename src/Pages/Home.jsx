import React, { useEffect, useState } from 'react'
import GenreList from '../Componenets/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Componenets/Banner'
import TrendingGames from '../Componenets/TrendingGames'
import GamesByGenresId from '../Componenets/GamesByGenresId'

function Home() {
  const [allGameList, setAllGameList] = useState()
  const [ gameListByGenres,setGameListByGenres]= useState([])
  const [ selectedGenresName, setSelectedGenresName] =useState('Action')
  useEffect(()=>{
    getAllGamesList();
    getGameListByGenresId(4);
  },[])

  //this function is for getting all the games
  const getAllGamesList= () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results)
    })
  }

  //this is for get popular games by catogaries or genres
  const getGameListByGenresId=(id)=>{
    GlobalApi.getGameListByGenreId(id).then((resp)=>{
      console.log('gamelist by id:',resp.data.results)
      setGameListByGenres(resp.data.results)
    })
  }

  return (
    <div className='grid grid-cols-4 px-8'>
      <div className='hidden md:block'>
        <GenreList genreId={(genresId)=>
          getGameListByGenresId(genresId)}
          selectedGenresName = {(name)=>setSelectedGenresName(name)}/>
      </div>
      <div className='col-span-4 md:col-span-3 ml-4'>
        {allGameList?.length>0&&gameListByGenres.length>0?
        <div>
        <Banner gameBanner={allGameList[0]}/>
        <TrendingGames gameList={allGameList}/>
        <GamesByGenresId gameList={gameListByGenres}
        selectedGenresName={selectedGenresName}/>
        </div>
        :null}
      </div>
    </div>
  )
}


export default Home
