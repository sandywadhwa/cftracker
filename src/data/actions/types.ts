export const FETCH_USER_SUBMISSIONS: string = "FETCH_USER_SUBMISSIONS";
export const FETCH_PROBLEM_LIST: string = "FETCH_PROBLEM_LIST";
export const FETCH_CONTEST_LIST: string = "FETCH_CONTEST_LIST";
export const FETCH_SHARED_PROBLEMS: string = "FETCH_SHARED_PROBLEMS";
export const FINISHED: string = "FINISHED";
export const ERROR_FETCHING: string = "ERROR_FETCHING";
export const ERROR_FETCHING_PROBLEMS: string = "ERROR_FETCHING_PROBLEMS";
export const ERROR_FETCHING_USER_SUBMISSIONS: string =
  "ERROR_FETCHING_USER_SUBMISSIONS";
export const ERROR_FETCHING_CONTEST_LIST: string =
  "ERROR_FETCHING_CONTEST_LIST";
export const ERROR_FETCHING_SHARED_PROBLEMS: string =
  "ERROR_FETCHING_SHARED_PROBLEMS";
export const LOADING: string = "LOADING";
export const LOADING_USER_SUBMISSIONS: string = "LOADING_USER_SUBMISSIONS";
export const LOADING_PROBLEM_LIST: string = "LOADING_PROBLEM_LIST";
export const LOADING_CONTEST_LIST: string = "LOADING_CONTEST_LIST";
export const LOADING_USERS: string = "LOADING_USERS";
export const LOADING_SHARED_PROBLEMS: string = "LOADING_SHARED_PROBLEMS";
export const ADD_USER: string = "ADD_USER";
export const REMOVE_USER: string = "REMOVE_USER";
export const ERROR_FETCHING_USER: string = "ERROR_FETCHING_USER";
export const CLEAR_USERS: string = "CLEAR_USERS";
export const CLEAR_USERS_SUBMISSIONS: string = "CLEAR_USERS_SUBMISSONS";
export const CLEAR_INDIVIDUAL_USER_SUBMISSIONS: string =
  "CLEAR_INDIVIDUAL_USER_SUBMISSONS";

export enum AppReducerType {
  ADD_ERROR_LOG = "ADD_ERROR_LOG",
  CLEAR_ERROR_LOG = "CLEAR_ERROR_LOG",
  CLEAR_SUCCESS_LOG = "CLEAR_SUCCESS_LOG",
  TOGGLE_THEME = "TOGGLE_THEME",
  APP_LOADED = "APP_LOADED",
  CHANGE_PER_PAGE = "CHANGE_PER_PAGE",
  CHANGE_MIN_RATING = "CHANGE_MIN_RATING",
  CHANGE_MAX_RATING = "CHANGE_MAX_RATING",
  TOGGLE_DATE = "TOGGLE_DATE",
  CHANGE_THEME = "CHANGE_THEME"
}

export enum ErrorLog {
  ERROR_FETCHING = "ERROR_FETCHING",
  ERROR_FETCHING_PROBLEMS = "ERROR_FETCHING_PROBLEMS",
  ERROR_FETCHING_CONTEST_LIST = "ERROR_FETCHING_CONTEST_LIST",
  ERROR_FETCHING_USER_SUBMISSIONS = "ERROR_FETCHING_USER_SUBMISSIONS",
  ERROR_FETCHING_SHARED_PROBLEMS = "ERROR_FETCHING_SHARED_PROBLEMS",
}

export enum SUCCESS_LOG {
  SUCCESS_LOG = "SUCCESS_LOG",
}