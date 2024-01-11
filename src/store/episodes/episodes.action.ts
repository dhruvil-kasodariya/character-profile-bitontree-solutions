import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { EPISODES_ACTION_TYPES, EpisodeData } from "./episodes.type";



export type FetchSingleEpisodeDataStart =
  Action<EPISODES_ACTION_TYPES.FETCH_SINGLE_EPISODE_DATA_START>;

export type FetchSingleEpisodeDataSuccess = ActionWithPayload<
  EPISODES_ACTION_TYPES.FETCH_SINGLE_EPISODE_DATA_SUCCESS,
  EpisodeData
>;

export type FetchSingleEpisodeDataFailed = Action<
  EPISODES_ACTION_TYPES.FETCH_SINGLE_EPISODE_DATA_FAILED
>;


export type IsPopupOpenAction =
  Action<EPISODES_ACTION_TYPES.IS_POPUP_OPEN>;

export const fetchSingleEpisodeDataStart = withMatcher(
  (): FetchSingleEpisodeDataStart =>
    createAction(EPISODES_ACTION_TYPES.FETCH_SINGLE_EPISODE_DATA_START)
);

export const fetchSingleEpisodeDataSuccess = withMatcher(
  (episodeData: EpisodeData): FetchSingleEpisodeDataSuccess =>
    createAction(
      EPISODES_ACTION_TYPES.FETCH_SINGLE_EPISODE_DATA_SUCCESS,
      episodeData
    )
);

export const fetchSingleEpisodeDataFailed = withMatcher(
  (): FetchSingleEpisodeDataFailed =>
    createAction(EPISODES_ACTION_TYPES.FETCH_SINGLE_EPISODE_DATA_FAILED)
);

export const isPopupOpenAction = withMatcher(
  (): IsPopupOpenAction =>
    createAction(EPISODES_ACTION_TYPES.IS_POPUP_OPEN)
);