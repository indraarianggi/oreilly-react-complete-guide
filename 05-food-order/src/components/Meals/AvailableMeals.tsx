import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import useHttp from "../../hooks/useHttp";
import Card from "../UI/Card";
import MealItem, { TMealItemProps } from "./MealItem/MealItem";

const AvailableMealsSection = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const LoadingSection = styled.section`
  text-align: center;
  color: white;
`;

const ErrorSection = styled.section`
  text-align: center;
  color: red;
`;

interface IMealResponse {
  [key: string]: {
    name: string;
    description: string;
    price: number;
  };
}

const AvailableMeals = () => {
  const { isLoading, error, sendRequest } = useHttp();

  const [meals, setMeals] = useState<TMealItemProps[]>([]);

  const fetchMeals = useCallback(() => {
    sendRequest<IMealResponse>(
      "https://oreily-react-http-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
      {},
      (data) => {
        const loadedMeals: TMealItemProps[] = [];

        for (const mealKey in data) {
          loadedMeals.push({ id: mealKey, ...data[mealKey] });
        }

        setMeals(loadedMeals);
      }
    );
  }, [sendRequest]);

  useEffect(() => {
    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <LoadingSection>
        <p>Loading...</p>
      </LoadingSection>
    );
  }

  if (error) {
    return (
      <ErrorSection>
        <p>{error}</p>
      </ErrorSection>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <AvailableMealsSection>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </AvailableMealsSection>
  );
};

export default AvailableMeals;
