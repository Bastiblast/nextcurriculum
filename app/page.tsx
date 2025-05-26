import PersonnalsCard from "./personnalsCard";
import { AvatarMy } from "@/components/avatar-my";
import Formation from "./formation";
import Experience from "./experience";

export default async function Home() {


  return (
    <>
    <header className="top-0 right-0 flex justify-start md:justify-end items-center ml-6">
      <div className="md:flex justify-center items-center w-30">
        <AvatarMy/>
      </div>
      <div id="myInfo" className="p-6">
        <PersonnalsCard />
      </div>
    </header>
    <main>
      <section 
      className="p-6"
      id="formation">
        <Formation/>
      </section>
      <section 
      className="p-6"
      id='experience'>
        <Experience/>
      </section>

    </main>
    </>
  );
}
