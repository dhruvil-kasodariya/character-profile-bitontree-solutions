import React from "react";
import SelectMenu from "./SelctedMenu";
import Pagination from "./Pagination";
import { useDispatch } from "react-redux";
import { changePageNumber, changeSubPageNumber, changeSubPagePerCount } from "../store/characters/characters.action";
import { getCharacters } from "../Api/api";
import { ResponseInfo } from "../store/characters/characters.type";

type PaginationMainProps = {
  responseInfo: ResponseInfo;
  pageNumber: number;
  subPagePerCount: number;
  totalSubPages: number;
  subPageNumber: number;
}

const PaginationMain: React.FC<PaginationMainProps> = ({
  responseInfo,
  pageNumber,
  subPagePerCount,
  totalSubPages,
  subPageNumber,
}) => {
  const dispatch = useDispatch();

  const subPagePerCountOption = [
    { id: 1, lable: 4, value: 4 },
    { id: 2, lable: 5, value: 5 },
    { id: 3, lable: 10, value: 10 },
    { id: 4, lable: 20, value: 20 },
  ];

  const handleSelect = (value: string) => {
    let numValue = parseInt(value, 10);
    dispatch(changeSubPagePerCount(numValue));
  };

  const handlePageChange = (pageNumber: number) => {
    dispatch(changeSubPageNumber(pageNumber));
  };

  const getNextCharactesData = () => {
    if (responseInfo.next) {
      dispatch(changePageNumber(pageNumber + 1));
      getCharacters(responseInfo.next, dispatch);
    }
  };

  const getPrevCharactesData = () => {
    if (responseInfo.prev) {
      dispatch(changePageNumber(pageNumber - 1));
      getCharacters(responseInfo.prev, dispatch);
    }
  };

  return (
    <div>
      <div className="w-full flex justify-around items-center sm:flex-row flex-col gap-2">
        <div >
          <SelectMenu
            onSelect={handleSelect}
            options={subPagePerCountOption}
            selectedValue={subPagePerCount}
          />
        </div>
        <div >
          <Pagination
            currentPage={subPageNumber}
            totalPages={totalSubPages}
            onPageChange={handlePageChange}
          />
        </div>
        <div className="flex items-center justify-center">
          {subPageNumber} page of {totalSubPages}
        </div>
      </div>
      <div className="flex flex-row items-center justify-around my-5">
        <button
          onClick={getPrevCharactesData}
          className="border border-blue-700 px-8 py-2 rounded-xl text-[gray]"
        >
          Prev
        </button>
        <div className="flex items-center justify-center">
          {pageNumber} page of {responseInfo.pages}
        </div>
        <button
          onClick={getNextCharactesData}
          className="border border-blue-700 px-8 py-2 rounded-xl text-[gray]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationMain;

