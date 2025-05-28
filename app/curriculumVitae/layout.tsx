import { Label } from "@/components/ui/label";

export default function Layout({
  experiences,
  formations,
  personnalsCard
}: Readonly<{
  experiences:React.ReactNode;
  formations: React.ReactNode;
  personnalsCard: React.ReactNode;
}>){

  return (
    <>
    <header className="md:flex justify-start md:justify-between">
      <Label>

      <h1 className="p-6 text-4xl">Curriculum vitæ</h1>
      </Label>
      <div id="myInfo" className="md:right-0 md:fixed p-6">
        {personnalsCard}
      </div>
    </header>
    <main className="md:w-3/4">
      <section className="p-6" id="formation">
        {formations}
      </section>
      <section className="p-6" id='experience'>
        {experiences}
      </section>

    </main>
    </>
  );
}
