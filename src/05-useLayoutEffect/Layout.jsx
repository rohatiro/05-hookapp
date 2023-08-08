import { useCounter, useFetch } from "../hooks";
import { LoadingPokemon, Pokemon } from "./../03-examples";

export const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

    const { sprites, name } = !!data && data;

    return (
        <>
            <h1>Pokemon</h1>
            <hr />

            <button disabled={ isLoading } onClick={ () => increment(1) } className="btn btn-primary">Next Pokemon</button>

            {
                isLoading
                ? <LoadingPokemon />
                : <Pokemon name={ name } sprites={ sprites } />
            }
        </>
    )
}
