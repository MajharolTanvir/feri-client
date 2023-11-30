import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <div className="card w-40 bg-white shadow-xl">
      <Link href="/" className="no-underline">
        <figure className="pt-5">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyGPqrRJ2aNs4nV6GiO1pID8c9hlmkQ32k9A&usqp=CAU"
            alt="Shoes"
            className="rounded-xl"
            height={50}
            width={50}
          />
        </figure>
        <div className="text-center text-green-700">
          <h2>Shoes!</h2>
        </div>
      </Link>
    </div>
  );
};

export default Category;
