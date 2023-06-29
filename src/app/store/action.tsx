/** @format */

export const fetchUserAsync = (action: number) => ({
  type: "FETCH_DATA_REQUEST",
  payload: action,
});

export const fetchEpisode = (action: number) => ({
  type: "FETCH_EPISODE_REQUEST",
  payload: action,
});
