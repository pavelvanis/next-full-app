export async function generateStaticParams() {
  return [{ user: "lordknedlik" }, { user: "admin" }];
}

export default function Page({
  params,
}: {
  params: { user: string; image: string };
}) {
  const { user } = params;

  return (
    <main>
      <h1>{user}</h1>
    </main>
  );
}
