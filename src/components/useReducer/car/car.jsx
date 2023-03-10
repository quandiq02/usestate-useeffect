import { useReducer, useState } from "react";
import "./car.css";
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return state.map((elem) =>
        elem.id === action.index ? { ...elem, isAdded: true } : elem
      );

    case "remove":
      return state.map((elem) =>
        elem.id === action.index ? { ...elem, isAdded: false } : elem
      );
    default:
      throw new Error();
  }
}

const Car = () => {
  const [state, dispatch] = useReducer(reducer, [
    { value: "V-6 engine", id: 0, isAdded: false, price: 1500 },
    { value: "Premium sound system", id: 1, isAdded: false, price: 500 },
    { value: "Rear spoiler", id: 2, isAdded: false, price: 250 },
    { value: "Racing detail package", id: 3, isAdded: false, price: 1500 },
  ]);
  const [price, setPrice] = useState(26395);

  return (
    <div className="car">
      <div className="car__wrapper">
        <div className="car__block-1">
          <div className="car__img">
            <img
              src="https://ravon.ru/uploads/cars/exterior/597062ed462ba.jpg"
              alt=""
            />
          </div>
          <div className="car__name">Nexia 3</div>
          <div className="car__amount car__amount-1">Without Features: $26395</div>
          <ul className="car__list">
            <div className="car__title-1">Added features:</div>
            {price > 26395 ? (
              ""
            ) : (
              <span>You can purchase items from the store</span>
            )}

            {state.map((e, index) =>
              e.isAdded ? (
                <li className="car__item">
                  <button
                    className="car__btn-remove"
                    key={index}
                    onClick={() => {
                      setPrice(price - e.price);

                      dispatch({ type: "remove", index });
                    }}
                  >
                    X
                  </button>
                  {e.value}
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="car__block-2">
          <ul className="car__list">
            <div className="car__title-2">Additional features</div>
            <span>You can purchase items from the store</span>
            {state.map((e, index) =>
              e.isAdded ? (
                ""
              ) : (
                <li className="car__item">
                  <button
                    className="car__btn-add"
                    key={index}
                    onClick={() => {
                      setPrice(price + e.price);
                      dispatch({ type: "add", index });
                    }}
                  >
                    Add
                  </button>
                  {e.value}
                </li>
              )
            )}
          </ul>
          <div className="car__amount-2 car__amount">
            Total Amount: ${price}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Car;
