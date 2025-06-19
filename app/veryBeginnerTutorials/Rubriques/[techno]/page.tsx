import UnderConstruction from "./under-construction"

export default async function Page({
  params,
}: {
  params: Promise<{ techno: string }>
}) {
  const { techno } = await params
  return <div> My techno Post: {techno}
  <UnderConstruction />
  </div>
}