import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

type ProductCardProps = {
  id: string,
  name: string,
  priceInCents: number,
  description: string,
  imagePath: string
}
export function ProductCard({ id, name, priceInCents, description, imagePath }: ProductCardProps) {
  return (
    <Card className="flex overflow-hidden flex-col">
      <div className="relative w-full h-auto aspect-video">
        <Image src={imagePath} fill alt={name} />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{formatCurrency(priceInCents / 100)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild size="lg" className="w-full ">
          <Link href={`/products/${id}/purchase`}>Buy</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}



export function ProductCardSkeleton({ id, name, priceInCents, description, imagePath }: ProductCardProps) {
  return (
    <Card className="flex overflow-hidden flex-col animate-pulse">
      <div className="relative w-full h-auto aspect-video bg-gray-300">

      </div>
      <CardHeader>
        <div className="w-3/4 h-6 rounded-full bg-gray-300"></div>
        <CardDescription>     <div className="w-1/2 h-4 rounded-full bg-gray-300"></div></CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="w-full h-4 rounded-full bg-gray-300"></div>
        <div className="w-full h-4 rounded-full bg-gray-300"></div>
        <div className="w-3/4 h-4 rounded-full bg-gray-300"></div>

      </CardContent>
      <CardFooter>
        <Button size="lg" disabled className="w-full bg-gray-400 h-12">
        </Button>
      </CardFooter>
    </Card>
  )
}

