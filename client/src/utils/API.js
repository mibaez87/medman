import axios from "axios";

export default {
  // Saves a family member to the database
  saveNewFamily: function (newFamilyData) {
    return axios.post("/api/family", newFamilyData)
  },
  // Saves a medicine to the db
  saveNewMed: function (newMedData) {
    return axios.post("api/prescriptions", newMedData);
  }
};