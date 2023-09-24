import { Card } from "../components"
import { useSearchParams } from "react-router-dom"
import { UseFetch } from "../hooks/UseFetch"
import { useTitle } from "../hooks/useTitle";
export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q")

  const {data: movies} = UseFetch(apiPath, queryTerm)

  const pagetitle = useTitle(`search result for ${queryTerm}`)

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `Page not found for ${queryTerm}` :`Result for ${queryTerm}`}
        {console.log(movies)}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          { movies.map((movie)=> (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>       
      </section>
    </main>
  )
}