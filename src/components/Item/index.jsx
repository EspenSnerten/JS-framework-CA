import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "@tanstack/react-router";
import AddToCartButton from "../AddToCart";


export default function SingleItem() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.noroff.dev/api/v1/online-shop/${itemId}`
        );
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [itemId]);

  return (
    <section className="flex flex-col justify-center w-full min-h-screen py-4">
      <div className="flex flex-col max-w-[700px] mx-auto bg-stone-50">
        {item && (
          <>
            <img
              className="object-contain w-full h-auto"
              src={item.imageUrl}
              alt={item.title}
            />
            <div className="flex flex-col gap-4 p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <div className="flex flex-row gap-4">
                {item.discountedPrice !== item.price ? (
                  <>
                    <p className="my-auto text-xs text-gray-500 line-through">{item.price},-</p>
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
              <AddToCartButton product={item} />
              <p className="font-light ">{item.description}</p>
              <p className="badge badge-neutral">{item.tags}</p>
              <p>User rating: {item.rating}</p>
              {item.reviews && (
                <div>
                  <h4 className="font-semibold">Reviews:</h4>
                  <ul>
                    {item.reviews.map((review) => (
                      <li key={review.id}>
                        <div className="flex flex-col gap-1 py-4">
                        <p className="font-semibold">{review.username}</p>
                        <p>{review.description}</p>
                        <p>Rating: {review.rating}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function calculateDiscountPercentage(discountedPrice, price) {
  const discountPercentage = ((price - discountedPrice) / price) * 100;
  return discountPercentage.toFixed(2);
}
