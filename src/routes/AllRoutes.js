import { Route, Routes} from 'react-router-dom'
import { MovieDetails } from '../pages'
import { MovieList } from '../pages'
import { Search } from '../pages'
import { PageNotFound } from '../pages'

export const AllRoutes = () => {
  return (
    <div className='dark:bg-darkbg'>
        <Routes>
            <Route path="" element={<MovieList apiPath="movie/now_playing" title="home" />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="popular"/>} />
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="top_rated"/>} />
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="upcoming" />} />
            <Route path="search" element={<Search apiPath='search/movie' />} />
            <Route path="*" element={<PageNotFound title="pageNotFound" />} />
        </Routes>
    </div>
  )
}
