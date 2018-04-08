import axios from "axios";

export default {
  // Saves a family member to the database
  saveNewFamily: function (newFamilyData) {
    return axios.post("/api/family", newFamilyData);
  },
  // Gets all family members
  getHousehold: function () {
    return axios.get("/api/family");
  },
};