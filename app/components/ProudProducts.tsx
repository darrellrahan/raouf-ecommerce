import React from "react";
import { products } from "../data/data";
import Image from "next/image";
import Link from "next/link";
import ItemCard from "./ItemCard";

function Proud() {
  return (
    <section id="proud">
      <div className="space-y-8">
        <h1 className="text-2xl font-bold">Products we are proud of</h1>
        <div className="grid grid-cols-[1fr] gap-4">
          {products
            .filter((data) => data.proud)
            .map((data) => (
              <ItemCard
                key={data.id}
                img={data.img.display}
                name={data.name}
                price={data.price}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Proud;
