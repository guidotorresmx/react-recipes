import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import endpoint from "../endpoints.config";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(location.pathname.split("/")[2]);
  }, [location]);

  useEffect(() => {
    console.log("pathname:", currentPath);
    getCuisine(currentPath);
  }, [currentPath]);

  // Render data 1st
  const getCuisine = async (name) => {
    // localstorage for storing our recipes
    console.log("cuisine:" + name);
    try {
      console.log(`'${name}' from localstorage`);
      const check = localStorage.getItem(name);
      if (check) {
        setCuisine(JSON.parse(check));
      } else {
        throw "no prefetched on localstorage";
      }
    } catch {
      console.log(`'${name}' from api`);
      if (name) {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${endpoint.API_KEY}&number=9&cuisine=${name}`
        );
        const data = await api.json();

        localStorage.setItem(cuisine, JSON.stringify(data.recipes));
        setCuisine(data.recipes);
        console.log(data.recipes);
      }
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Recipes</h3>

        <Splide
          options={{
            type: "loop",
            perPage: 2,
            perMove: 1,
            gap: "1rem",
            pagination: false,
            height: "10rem",
          }}
        >
          {cuisine &&
            cuisine.map((recipe) => {
              return (
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

export default Cuisine;
