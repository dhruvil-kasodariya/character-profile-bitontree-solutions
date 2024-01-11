import React from "react";
import Popup from "./Popup";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleEpisodeInfo } from "../store/episodes/episodes.selector";
import { Link } from "react-router-dom";
import { isPopupOpenAction } from "../store/episodes/episodes.action";

type PopupMainProp ={ setOpen: React.Dispatch<React.SetStateAction<boolean>>}

const PopupMain :React.FC<PopupMainProp>= ({setOpen}) => {
  const dispatch =useDispatch()
  const data = useSelector(selectSingleEpisodeInfo);

  let contant;
  if (data) {
    contant = (
      <div className="flex flex-col items-center gap-3">
        <h1 className="w-full flex items-center justify-center font-bold text-2xl">
          {data.name}
        </h1>
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="font-semibold text-lg">Episode</h1>
          <h1 className="text-lg">{data.episode}</h1>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="font-semibold text-lg">Air Date</h1>
          <h1 className="text-lg">{data.air_date}</h1>
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-2">
          <h1 className="font-semibold text-lg">Characters in This Episode</h1>
          <div className="grid grid-cols-10 gap-2">
            { data.characters && data.characters.map((info) => {
              return (
                <Link
                
                  key={info.id}
                  to={`/characters/view-character/${info.id}`}
                >
                  <img
                  onClick={()=>dispatch(isPopupOpenAction())}
                    src={info.image}
                    alt={info.name}
                    width="50px"
                    height="50px"
                    className="rounded-full"
                    title={info.name}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Popup contant={contant} setOpen={setOpen}/>
    </div>
  );
};

export default PopupMain;
