import Button from "@/app/components/Button";
import React from "react";
import image from "@/public/image.jpg";
import Image from "next/image";

function Mission() {
  return (
    <main>
      <div className="my-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi
        officiis quis ducimus perferendis, aut beatae sequi aliquam, vel iste
        laboriosam exercitationem ullam ea autem veritatis? Praesentium
        similique vel impedit consequuntur minima vero, ea quas magni hic neque
        ut numquam dicta labore sequi excepturi laboriosam corrupti!
        Necessitatibus nam nesciunt aspernatur?
      </div>
      <Button />
      {/* Image component from Next js */}
      <Image placeholder="blur" src={image} alt="image" quality={100} />
    </main>
  );
}

export default Mission;
