const course = {
    code: "WDD131",
    name: "Dynamic Fundamentals",

    //Array?
    sections:[
        {
            sectionNum: A2,
            roomNum: "",
            enrolled: 88,
            days: "28",
            instructor: "Brother Lindsey",
        },
        {
            sectionNum: A1,
            roomNum: "",
            enrolled: 11,
            days: "",
            instructor: "Brother Lindsey"
        },
    ],
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0){
            this.sections[sectionIndex].enrolled++;
            renderSections(this.section);
        }
    },
    dropStudent: function (sectionNum){
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if(sectionIndex >= 0){
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },
};

function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
  }
  
function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}
  
function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}
  
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});
  
setCourseInfo(aCourse);
renderSections(aCourse.sections);

changeEnrollment: function (sectionNum, add = true) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
        if (add) {
            this.sections[sectionIndex].enrolled++;
        } else {
            this.sections[sectionIndex].enrolled--;
        }
        renderSections(this.sections);
    }
}