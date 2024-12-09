"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Classic Assam Black Tea",
    description: "Rich, malty flavor with a deep amber color",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Premium Gold Tips",
    description: "Smooth, honeyed notes with golden tips",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Organic Green Tea",
    description: "Light, refreshing with subtle sweetness",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=2940&auto=format&fit=crop",
  },
];

export function Products() {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (!isClient) {
    // Avoid hydration errors by rendering only a placeholder during server rendering.
    return null;
  }

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Premium Teas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="fade-in">
              {loading ? (
                <Skeleton className="h-48 w-full" />
              ) : (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
              )}
              <CardHeader>
                <CardTitle>{loading ? <Skeleton className="h-6 w-3/4" /> : product.name}</CardTitle>
                <CardDescription>
                  {loading ? (
                    // Wrapping Skeleton inside a span to avoid <div> inside <p>
                    <span>
                      <Skeleton className="h-4 w-full" />
                    </span>
                  ) : (
                    product.description
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <Skeleton className="h-6 w-24" />
                ) : (
                  <p className="text-2xl font-bold">${product.price}</p>
                )}
              </CardContent>
              <CardFooter>
                {loading ? (
                  <Skeleton className="h-10 w-full" />
                ) : (
                  <Button className="w-full">Add to Cart</Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
