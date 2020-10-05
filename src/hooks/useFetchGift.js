import { useState, useEffect } from "react";
import { getGift } from "../helpers/GetGifts";

export const useFetchGift = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGift(category).then((imgs) => {
      console.log(imgs);
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
