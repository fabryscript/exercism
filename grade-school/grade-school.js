//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor(){
    this.school = {};
  }
  roster() {
    return JSON.parse(JSON.stringify(this.school));
  }

  add(name, classNumber) {
    const keys = Object.keys(this.school);

    for(const k of keys){
      let indexOfDuplicatedUser = this.school[k].indexOf(name);
      
      if(indexOfDuplicatedUser > -1){
        this.school[k].splice(indexOfDuplicatedUser, 1);
      }
    }
      
    this.school[classNumber] === undefined ? this.school[classNumber] = [name] : this.school[classNumber].push(name);
    this.school[classNumber].sort();
  }

  grade = (number) => this.roster()[number] ?? []
}