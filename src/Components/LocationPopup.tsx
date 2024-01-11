import React, { useState } from "react";
import Popup from "./Popup";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectSingleLocationInfo,
} from "../store/locations/locations.selector";
import { isPopupOpenAction } from "../store/episodes/episodes.action";
import { Link } from "react-router-dom";

type LocationPopupProp = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LocationPopup: React.FC<LocationPopupProp> = ({ setOpen }) => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(50);

  const dispatch = useDispatch();
  const data = useSelector(selectSingleLocationInfo);
  const error = useSelector(selectError);

  let maxCharacter: number = 50;
  let currentPages: number = Math.floor(endIndex / 50);

  let contant;
  if (data && !!!error) {
    contant = (
      <div className="flex flex-col items-center gap-3">
        <h1 className="w-full flex items-center justify-center font-bold text-2xl">
          {data.name}
        </h1>
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="font-semibold text-lg">Type</h1>
          <h1 className="text-lg">{data.type}</h1>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="font-semibold text-lg">Dimension</h1>
          <h1 className="text-lg">{data.dimension}</h1>
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-2">
          <h1 className="font-semibold text-lg">
            Characters From This Location
          </h1>
          <div className="grid grid-cols-10 gap-2">
            {data.residents &&
              data.residents.slice(startIndex, endIndex).map((info) => {
                return (
                  <Link
                    key={info.id}
                    to={`/characters/view-character/${info.id}`}
                  >
                    <img
                      onClick={() => dispatch(isPopupOpenAction())}
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
          {data.residents && (
            <div className="w-full flex flex-row items-center justify-center gap-5">
              <button
                onClick={() => {
                  setStartIndex(startIndex - maxCharacter);
                  setEndIndex(endIndex - maxCharacter);
                }}
                disabled={!startIndex}
                className="my-3 px-2 text-lg border border-[gray] rounded-lg hover:bg-slate-400"
                title="Previous"
              >
                &lt;&lt;
              </button>
              <span>{currentPages}</span>
              <button
                onClick={() => {
                  setStartIndex(startIndex + maxCharacter);
                  setEndIndex(endIndex + maxCharacter);
                }}
                disabled={
                  currentPages >
                  Math.floor(data?.residents.length / maxCharacter)
                }
                title="Next"
                className="my-3 px-2 text-lg border border-[gray] rounded-lg hover:bg-slate-400"
              >
                &gt;&gt;
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
  if (!data && error) {
    contant = (
      <div className="flex item-center justify-center">Data not Found</div>
    );
  }
  return (
    <div>
      <Popup contant={contant} setOpen={setOpen} />
    </div>
  );
};

export default LocationPopup;
