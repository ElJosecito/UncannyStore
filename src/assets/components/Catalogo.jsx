import React from "react";
import Items from "./Items";

function Catalogo({ data }) {
  return (
    <>
      <section className=" w-full min-h-screen h-fit flex justify-center ">
        <div className="max-w-screen-xl w-full flex flex-col items-center">
        <h2 className="font-mono text-3xl font-semibold self-start mb-10 ">Popular products from <br/> <span className="font-extrabold text-blue-600">Uncanny</span></h2>
        <div className="w-fit min-h-screen h-fit grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4 gap-16">
        {data.map((respon) => {
          return (
            <Items
              key={respon.id}
              title={respon.title}
              description={respon.description}
              rating={respon.rating.rate}
              img={respon.image}
              price={respon.price}
            />
          )
        })}
        </div>
        </div>
      </section>
    </>
  );
}

export default Catalogo;
