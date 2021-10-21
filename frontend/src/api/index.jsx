import axios from "axios";

const URL = "http://localhost:5000";

export const fetchStories = () => axios.get(URL);

export const fetchStory = (uid) => axios.get(`${URL}/details?uid=${uid}`);

export const addStory = (data) => axios.post(URL, data);

export const deleteStory = (uid) => axios.delete(`${URL}?uid=${uid}`);

export const updateStory = (uid, data) =>
  axios.patch(`${URL}?uid=${uid}`, data);
