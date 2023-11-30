import React from "react";
import { Carousel, Rate } from "antd";
import { Button, Popover } from "antd";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import {
  BsFillBagHeartFill,
  BsFillCartFill,
  BsFillCartPlusFill,
} from "react-icons/bs";
import Link from "next/link";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "3%",
};

const ProductCard = () => {
  return (
    <div>
      <Link href="/" className="no-underline">
        <div className="card card-compact w-80 text-green-700 shadow hover:shadow-md">
          <Carousel className="px-5 pt-4" autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
          </Carousel>
          <div className="card-body px-5">
            <div className="grid grid-cols-4 items-center gap-2">
              <div className="col-span-3">
                <h2 className="card-title">Shoes!</h2>
                <Rate disabled allowHalf defaultValue={4.5} />
                <div className="flex justify-between">
                  <h2 className="flex items-center">
                    <FaBangladeshiTakaSign />
                    900
                  </h2>
                  <h2 className="flex items-center line-through text-gray-400">
                    <FaBangladeshiTakaSign />
                    1300
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 text-green-700">
                <Popover content="Wishlist">
                  <Button className="border-none">
                    <BsFillBagHeartFill className="text-xl text-green-700" />
                  </Button>
                </Popover>
                <Popover content="Add to cart">
                  <Button className="border-none">
                    <BsFillCartPlusFill className="text-xl text-green-700" />
                  </Button>
                </Popover>
                <Popover content="Buy Now">
                  <Button className="border-none">
                    <BsFillCartFill className="text-xl text-green-700" />
                  </Button>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
