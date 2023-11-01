
export async function GET(req: Request) {

    const data = { time: new Date().toLocaleString() }
    return new Response(JSON.stringify(data))
}