import { useEffect, useContext } from "react";

import { Context } from "../store";
import { saveData, toggleLoading } from "../actions";

const useFetchProducts = () => {
  const [{ products }, dispatch] = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(toggleLoading());

      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/photos?albumId=1"
        );

        const data = await res.json();

        dispatch(saveData(data));
      } catch (err) {
        console.error(err);
      }

      dispatch(toggleLoading());
    };

    if (products.length > 0) return;

    fetchData();
  }, [dispatch, products]);
};

export default useFetchProducts;
