import PersonnalsCard from "./personnalsCard";
import { AvatarMy } from "@/components/avatar-my";
import Formation from "./formation";
import Experience from "./experience";

export default async function Home() {


  return (
    <>
    <header className="flex justify-start md:justify-end">
      <div id="myInfo" className="p-6">
        <PersonnalsCard />
      </div>
    </header>
    <main>
      <section className="p-6" id="formation">
        <Formation/>
      </section>
      <section className="p-6" id='experience'>
        <Experience/>
      </section>

    </main>
    </>
  );
}
