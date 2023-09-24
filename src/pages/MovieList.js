import { UseFetch } from "../hooks/UseFetch"
import { Card } from "../components/Card"
import { useTitle } from "../hooks/useTitle"
export const MovieList = ({apiPath, title}) => {
  
  const { data : movies} = UseFetch(apiPath)

  const pagetitle = useTitle(title)
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          { movies.map((movie)=> (
            <Card key={movie.id} movie={ movie } />
          )) }
        </div>
      </section>
    </main>
  )
}
