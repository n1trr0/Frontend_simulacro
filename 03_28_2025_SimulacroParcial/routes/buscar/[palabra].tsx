import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Diccionario } from "../../components/Diccionario.tsx";

export type Words = {
  word: string
  meanings: Meanings[]
}

export type Meanings = {
  partOfSpeech: string
  definitions: Definitions[]
  synonyms: string[]
}

export type Definitions = {
  definition: string
  example?: string
}

export const handler: Handlers<Words> = {
  GET: async (req: Request, ctx: FreshContext<unknown, Words>) => {
    const url = new URL(req.url);
    const split_palabra= url.pathname.split("/");
    const palabra = split_palabra.pop();

    const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + palabra)
    const data = await response.json()

    return ctx.render(data[0])
  }
}

export default function palabra(props: PageProps<Words>) {
  return(
      <div>
          <Diccionario {...props.data}/>
      </div>
  )
}