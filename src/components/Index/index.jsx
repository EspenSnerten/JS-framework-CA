import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@tanstack/react-router";

export default function Index() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.noroff.dev/api/v1/online-shop"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="max-w-[1700px] w-[90%] mx-auto flex flex-col min-h-screen justify-center py-4">
      {data && (
        <div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 max-w-[1150px] w-fit mx-auto">
            {data.map((item) => (
              <Link key={item.id} to={`/item/${item.id}`}>
                {" "}
                <div className="flex flex-col max-w-[370px] bg-stone-50 hover:bg-stone-200">
                  <img
                    className="object-cover w-full md:min-h-[500px] min-h-[200px]"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <div className="flex flex-col gap-4 p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="flex flex-row gap-4">
                      {item.discountedPrice !== item.price ? (
                        <>
                          <p className="my-auto text-xs text-gray-500 line-through">
                            {item.price},-
                          </p>
                          <p className="font-semibold text-green-600">
                            {item.discountedPrice},- (
                            {calculateDiscountPercentage(
                              item.discountedPrice,
                              item.price
                            )}
                            % off)
                          </p>
                        </>
                      ) : (
                        <p className="font-semibold">{item.price},-</p>
                      )}
                    </div>
                    <p>User rating: {item.rating}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function calculateDiscountPercentage(discountedPrice, price) {
  const discountPercentage = ((price - discountedPrice) / price) * 100;
  return discountPercentage.toFixed(2);
}
