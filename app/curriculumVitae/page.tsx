import PersonnalsCard from "./personnalsCard";
import Formation from "./formation";
import Experience from "./experience";
import { Label } from "@/components/ui/label";

export default async function Home() {


  return (
    <>
    <header className="md:flex justify-start md:justify-between">
      <Label>

      <h1 className="p-6 text-4xl">Curriculum vitæ</h1>
      </Label>
      <div id="myInfo" className="md:right-0 md:fixed p-6">
        <PersonnalsCard />
      </div>
    </header>
    <main className="md:w-3/4">
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
