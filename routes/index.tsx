import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext<unknown>) => {
    const url= new URL(req.url)
    const palabra= url.searchParams.get("palabra")||undefined

    if(palabra){
      return new Response("", {
        status: 307,
        headers: { Location: "/buscar/" + palabra},
      });
    }
    return ctx.render();
  }
}


export default function Home() {
  return (
    <div class="container">
      <form method="get" target="/trivia" >
        <input class="form" type="text" name="palabra" placeholder="Buscador" value=""/>
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}
