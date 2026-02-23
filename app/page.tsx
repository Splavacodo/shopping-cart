import HomeShopButton from "./components/HomeShopButton";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col font-sans items-center justify-center gap-8">
      <h1
      className="font-semibold text-5xl">
        FakeStore
      </h1>
      <HomeShopButton/>
    </main>
  );
}
