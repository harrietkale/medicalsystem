const mongoose = requir('mongooose');

const patientSchema = new mongoose.Schema({
    patientID: String,
    surname: String,
    othernames: String,
    phoneNumber: String,
    gender: String,
    residentialAdress: String,
    emergencyContact:{
        name: String,
        contact: String,
        relationship: String,

    },
});

const Patient = mongoose.model ('Patient',patientSchema);

 module.exports = Patient;
