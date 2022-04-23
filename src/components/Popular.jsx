import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import endpoint from "../endpoints.config";

function Popular() {
  const [popular, setPopular] = useState([]);

  // Run function when component is loaded
  useEffect(() => {
    getPopular();
  }, []);

  // Render data 1st
  const getPopular = async () => {
    // localstorage for storing our recipes

    try {
      const check = localStorage.getItem("popular");
      if (check) {
        setPopular(JSON.parse(check));
      } else {
        throw "no prefetched on localstorage";
      }
    } catch {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${endpoint.API_KEY}&number=9`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div className="container">
      <Wrapper>
        <h3>Popular Recipes</h3>

        <Splide
          options={{
            type: "loop",
            perPage: 3,
            arrows: true,
            pagination: true,
            drag: "free",
            gap: "1rem",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            interval: 2300,
          }}
        >
          {popular &&
            popular.map((recipe) => {
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
          <li class="splide__slide" data-splide-interval="300"></li>
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

export default Popular;
