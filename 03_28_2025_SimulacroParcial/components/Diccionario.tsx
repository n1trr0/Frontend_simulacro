import { Words } from "../routes/buscar/[palabra].tsx";

export function Diccionario(props: Words){
    return(
        <div>
            <a href="../">Pagina principal</a>
            <h1>Palabra: {props.word}</h1>
            {props.meanings.map((e) => (
                <div>
                    <h2>Tipo: {e.partOfSpeech}</h2>
                    {e.definitions.map((u) => (
                        <div>
                            <p>Definicion: {u.definition}</p>
                            <p>{u.example ? `Ejemplo: ${u.example}` : ""}</p>
                        </div>
                    ))}
                    {e.synonyms.map((o) => (
                        <div>
                            <a href={"/buscar/" + o}>{o}</a>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}