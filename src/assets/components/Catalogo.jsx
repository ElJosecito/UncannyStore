import React from "react";
import Items from "./Items";

function Catalogo({ data }) {
  return (
    <>
      <section className="w-full min-h-screen h-fit flex justify-center">
        <div className="w-fit h-screen grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4 gap-16">
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
      </section>
    </>
  );
}

export default Catalogo;
