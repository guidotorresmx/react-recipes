import { useEffect, useState } from "react";
import endpoint from "../endpoints.config";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  // Run function when component is loaded
  useEffect(() => {
    getVeggie();
  }, []);

  // Render data 1st
  const getVeggie = async () => {
    // localstorage for storing our recipes
    console.log("veggie");
    try {
      console.log("veggie from localstorage");
      const check = localStorage.getItem("veggie");
      if (check) {
        setVeggie(JSON.parse(check));
      } else {
        throw "no prefetched on localstorage";
      }
    } catch {
      console.log("veggie from api");
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${endpoint.API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div className="container">
      <Wrapper>
        <h3>Vegetarian Recipes</h3>

        <Splide
          options={{
            type: "loop",
            perPage: 2,
            perMove: 1,
            gap: "1rem",
            pagination: true,
            height: "25rem",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            interval: 1300,
          }}
        >
          {veggie &&
            veggie.map((recipe) => {
              return (
                // add key id
                <SplideSlide>
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Card>
                </SplideSlide>
              );
            })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: bold;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
