import { Button } from "@/components/ui/button";
import db from "@/db/db";
import { formatCurrency } from "@/lib/formatters";
import { Link } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

async function SuccessPage({
  searchParams,
}: {
  searchParams: { payment_intent: string };
}) {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent
  );

  if (paymentIntent.metadata.productId == null) return notFound();

  const product = await db.product.findUnique({
    where: { id: paymentIntent.metadata.productId },
  });

  if (product == null) return notFound();

  const isSuccess = paymentIntent.status === "succeeded";

  return (
    <div className="flex gap-4 items-center">
      <h1 className="text-4xl font-bold">
        {isSuccess ? "Success!" : "Error!"}
      </h1>
      <div className="aspect-video flex-shrink-0 w-1/3 relative">
        <Image
          src={product.imagePath}
          fill
          alt={product.name}
          className="object-cover"
        />
      </div>
      <div className="flex-row gap-4 items-center">
        <div className="text-lg">
          {formatCurrency(product.priceInCents / 100)}
        </div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="line-clamp-3 text-muted-foreground">
          {product.description}
        </div>
        <Button className="mt-4" size="lg" asChild>
          {isSuccess ? (
            <a
              href={`/products/download/${await createDownloadVerification(
                product.id
              )}`}
            >
              Download
            </a>
          ) : (
            <Link href={`/products/${product.id}/purchase`}>try again</Link>
          )}
        </Button>
      </div>
    </div>
  );
}
async function createDownloadVerification(productId: string) {
  console.log("id moruk --> ", productId);
  const verificId = await db.downloadVerification.create({
    data: { productId, expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24) },
  });
  console.log("verificId --> ", verificId);

  return verificId.id;
}
export default SuccessPage;
