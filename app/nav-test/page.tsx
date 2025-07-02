import { DiscNav } from "@/components/disc-nav";

export default function NavTest() {
  return (
    <main className="bg-sky-950 h-screen overflow-x-hidden">
      <nav className="border-sky-100 border-2 flex justify-between items-center py-3 px-5 text-md text-white">
        <div className="text-xl font-bold">Logo</div>
        <DiscNav />
      </nav>

      <div className="screen-container">
        <DiscNav />
      </div>
    </main>
  );
}
