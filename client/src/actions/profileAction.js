import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  GET_PORTFOLIO
} from "./types";

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/portfolio/profile/")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err => dispatch({ type: GET_PROFILE, payload: {} }));
};

// Get Profile by Handle
export const getProfileByHandle = handle => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/portfolio/handle/${handle}/`)
    .then(res =>
      dispatch({
        type: GET_PORTFOLIO,
        payload: res.data
      })
    )
    .catch(err => dispatch({ type: GET_PORTFOLIO, payload: null }));
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post("/api/portfolio/create-portfolio/", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Education
export const addEducation = (educationData, history) => dispatch => {
  axios
    .post("/api/portfolio/education/", educationData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Education
export const deleteEducation = id => dispatch => {
  axios
    .delete("/api/portfolio/education/" + id)
    .then(res => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Project
export const addProject = (projectData, history) => dispatch => {
  axios
    .post("/api/portfolio/work/", projectData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Project
export const deleteProject = id => dispatch => {
  axios
    .delete("/api/portfolio/project/" + id)
    .then(res => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Social
export const addSocial = (socailData, history) => dispatch => {
  axios
    .post("/api/portfolio/social/", socailData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
