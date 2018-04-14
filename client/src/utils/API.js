import axios from "axios";

export default {
  // Saves a family member to the database
  saveNewFamily: function (newFamilyData) {
    return axios.post("/api/family", newFamilyData)
  },
  // Gets a family member with the given id
  findOneMember: function (id) {
    return axios.get("/api/family/" + id);
  },
  // Saves a medicine to the db
  saveNewMed: function (familyMemberId, newMedData) {
    return axios.post("/api/family/prescriptions/" + familyMemberId, newMedData);
  },
  // Gets meds for a specific family member
  getMemberMeds: function (familyMemberId){
    return axios.get("/api/family/prescriptions/" + familyMemberId);
  }
};