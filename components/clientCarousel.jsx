import * as React from "react";
import Conatiner from "@/components/Conatiner";
import Image from "next/image";
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
        <CarouselItem className="transform transition-transform duration-300 ease-in-out hover:scale-110 md:basis-1/2 lg:basis-1/4">
          <div className="p-1">
            <Card className="min-h-[100px] min-width-[300px]">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Link href={"https://oswalpumps.com/"}>
                  <Image
                    src={"/images/oswal.png"}
                    width={500}
                    height={500}
                    alt="img"
                    className="rounded-2xl"
                  />
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="transform transition-transform duration-300 ease-in-out hover:scale-110 md:basis-1/2 lg:basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Link href={"https://www.shaktipumps.com/"}>
                  <Image
                    src={"/images/shakti.png"}
                    width={500}
                    height={500}
                    alt="img"
                    className="rounded-2xl"
                  />
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="transform transition-transform duration-300 ease-in-out hover:scale-110 md:basis-1/2 lg:basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6 rounded-xl">
                <Link href={"https://www.crigroups.com/"}>
                  <Image
                    src={"/images/cri_logo.png"}
                    width={500}
                    height={500}
                    alt="img"
                    className="rounded-2xl border-red-600 border-2"
                  />
                  {/* <span className="text-3xl font-semibold">CRI Pumps</span> */}
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="transform transition-transform duration-300 ease-in-out hover:scale-110 md:basis-1/2 lg:basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Link href={"https://www.crompton.co.in/pages/pumps"}>
                  <Image
                    src={"/images/crompton.png"}
                    width={500}
                    height={500}
                    alt="img"
                    className="rounded-2xl"
                  />
                  {/* <span className="text-3xl font-semibold">Crompton Pumps</span> */}
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
