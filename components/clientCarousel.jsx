import * as React from "react";
import Conatiner from "@/components/Conatiner";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export function ClientCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="min-h-[100px] min-width-[300px]"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="min-h-[200px] min-width-[300px]">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Link href={"https://oswalpumps.com/"}>
                  <span className="text-3xl font-semibold">Oswal Pumps</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Link href={"https://oswalpumps.com/"}>
                  <span className="text-3xl font-semibold">Shakti Pumps</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Link href={"https://oswalpumps.com/"}>
                  <span className="text-3xl font-semibold">CRI Pumps</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Link href={"https://oswalpumps.com/"}>
                  <span className="text-3xl font-semibold">Crompton Pumps</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
