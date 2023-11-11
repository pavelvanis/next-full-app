export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function Page({
  params,
}: {
  params: { user: string; image: string };
}) {
  const { user } = params;
  console.log(params);

}
