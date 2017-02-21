export class Learner {
  constructor(idLearner, Name, lastName, Email, Password, Program, trainingCenter, groupCard,
  City, Regional, Phone, Gender, fkIdInstructor) {
    this.idLearner = idLearner;
    this.Name = Name;
    this.lastName = lastName;
    this.Email = Email;
    this.Password = Password;
    this.Program = Program;
    this.trainingCenter = trainingCenter;
    this.groupCard = groupCard;
    this.City = City;
    this.Regional = Regional;
    this.Phone = Phone;
    this.Gender = Gender;
    this.fkIdInstructor = fkIdInstructor;
  }
}
