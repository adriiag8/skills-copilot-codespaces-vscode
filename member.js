function skillsMember() {
        var member = {
    name: "John",
    age: 30,
    skils: ["HTML", "CSS", "JS"],
    showSkils: function () {
      this.skils.forEach(function (skill) {
        console.log(skill);
      });
    },
  };
  return member;
}
