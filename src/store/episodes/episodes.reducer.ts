import { UnknownAction } from "redux";
import { fetchSingleEpisodeDataFailed, fetchSingleEpisodeDataStart, fetchSingleEpisodeDataSuccess, isPopupOpenAction } from "./episodes.action";
import { EpisodeData } from "./episodes.type";


export type EpisodesState = {
  isLoading: boolean;
  error: Error | null | string;
  singleEpisodeInfo:EpisodeData | null;
  isPopupOpen:boolean;
};

const INITIAL_STATE: EpisodesState = {

  isLoading: false,
  error: null,
  singleEpisodeInfo:null,
  isPopupOpen:false
};

export const episodesReducer = (
  state = INITIAL_STATE,
  action: UnknownAction
): EpisodesState => {
  if ( fetchSingleEpisodeDataStart.match(action)) {
    return { ...state, isLoading: true ,isPopupOpen:false ,singleEpisodeInfo:null };
  }

  if(fetchSingleEpisodeDataSuccess.match(action)) {
    return {
      ...state,singleEpisodeInfo:action.payload,isLoading:false,isPopupOpen:true
    }
  }
  if ( fetchSingleEpisodeDataFailed.match(action)) {
    return { ...state, error: "Data not Found", isLoading: false ,isPopupOpen:true,singleEpisodeInfo:null
  }
}
  if(isPopupOpenAction.match(action)){
    return{
      ...state,isPopupOpen:!(state.isPopupOpen),
    }
  }
  return state;
};
