export const GradeSchool = (function() {
  // To prevent outside code to mutate the internal roster directly,
  // use a WeakMap to store object private properties.
  const PRIVATE = new WeakMap();

  class GradeSchool {
    constructor() {
      // Create a new object private property for  the internal roster.
      PRIVATE.set(this, []);
    }

    roster() {
      const thisRoster = PRIVATE.get(this);

      return thisRoster.reduce((roster, names, grade) => {
        roster[grade] = names.slice(); // return a copy only
        return roster;
      }, {});
    }

    add(name, grade) {
      const thisRoster = PRIVATE.get(this);
      const gradedNames = thisRoster[grade] || [];

      gradedNames.push(name);

      thisRoster[grade] = gradedNames.sort();
    }

    grade(grade) {
      const thisRoster = PRIVATE.get(this);
      const gradedNames = thisRoster[grade] || [];

      return gradedNames.slice(); // return a copy only
    }
  }

  return GradeSchool;
})();
