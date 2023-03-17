import { useReducer, useState } from "react";
import "./card.css";

function reducer(state, action) {
  switch (action.type) {
    case "select-card":
      return state.map((elem) =>
        elem.id === action.index
          ? { ...elem, isSelected: !elem.isSelected }
          : elem
      );
    case "select-all":
      return state.map((elem) => ({ ...elem, isSelected: !elem.isSelected }));
    default:
      throw new Error();
  }
}
const Card = () => {
  const [modalActive, setModalActive] = useState(false);
  const [state, dispatch] = useReducer(reducer, [
    {
      value: "EUA - Los Angeles",
      id: 0,
      img: "https://img.particlenews.com/image.php?type=thumbnail_580x000&url=0MxbB0_0cMsjSik00",
      isSelected: false,
    },
    {
      value: "Greece - Santorini",
      id: 1,
      img: "https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136__480.jpg",
      isSelected: false,
    },
    {
      value: "United Kingdom - London",
      id: 2,
      img: "https://media.istockphoto.com/id/648477278/photo/big-ben-in-london.jpg?b=1&s=170667a&w=0&k=20&c=oL3SiJJT6iKrjSiJA8YddoLJ9iRP6bNHWDFiAOgUUmc=",
      isSelected: false,
    },
  ]);
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__header">
          <div className="card__header-title">Select a travel</div>
          <div className="card__header-btn header-btn">
            <button
              className="header-btn__submit"
              onClick={() => setModalActive(true)}
            >
              Submit
            </button>
            <button
              className="header-btn__submit-all"
              onClick={() => dispatch({ type: "select-all" })}
            >
              Toggle all
            </button>
          </div>
        </div>
        <div className="card__main">
          {state.map((e, index) => (
            <div
              className="card__elem"
              key={index}
              onClick={() => dispatch({ type: "select-card", index })}
              style={{
                border: e.isSelected
                  ? "2px solid blue"
                  : "2px solid transparent",
              }}
            >
              <div className="card__elem-img">
                <img src={e.img} alt="" />
              </div>
              <div className="card__title">{e.value}</div>
            </div>
          ))}
        </div>
        <div
          className={modalActive ? "modal__content-active" : "modal__content"}
        >
          <div className="card-modal__block">
            <div className="card-modal__title">
              Selected Travels:
            </div>
            {state.map((e, index) =>
              e.isSelected ? (
                <div
                  className="modal__elem"
                  key={index}
                >
                  <div className="modal__elem-img">
                    <img src={e.img} alt="" />
                  </div>
                  <div className="modal__title">{e.value}</div>
                </div>
              ) : (
                ""
              )
            )}
            <div
              className="card-modal__btn-exit"
              onClick={() => setModalActive(false)}
            >
              X
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
