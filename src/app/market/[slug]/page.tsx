import { MarketDetails } from "@/components/market-details";

export default async function Page({ params }: { params: { slug: string } }) {
  // awaiting because params API is async
  const parameters = await params;

  return (
    <MarketDetails slug={parameters.slug}/>
  );
}