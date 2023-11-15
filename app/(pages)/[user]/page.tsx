export async function generateStaticParams() {
  return [{ user: "lordknedlik" }, { user: "admin" }];
}

const Page = async ({ params }: { params: { user: string } }) => {
  const { user } = params;

  return (
    <main>
      <h1>{user}</h1>
    </main>
  );
};

export default Page;
