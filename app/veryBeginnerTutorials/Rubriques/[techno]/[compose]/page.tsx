import UnderConstruction from "../under-construction"

export default async function Page({
  params,
}: {
  params: Promise<{ compose: string }>
}) {
  const { compose } = await params
  return <div> My Post: {compose}
  <UnderConstruction />
  </div>
}