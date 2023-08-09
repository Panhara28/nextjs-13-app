import HomeScreen from "@/screens/Home";
const session = true;
export default function Home() {
  if (!session) throw new Error(`Session is invalid!`);
  return (
    <>
      <HomeScreen />
    </>
  );
}
