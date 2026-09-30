const name = "Saieed";
let marks=[];

marks.push(70);
marks.push(75);
marks.push(80);
marks.push(95);
marks.push(45);
marks.push(65);

function calculateTotal(marks){
  let total = 0;
  for(let i=0;i<marks.length;i++){
      total = total + marks[i];
  }
  return total;
}

function calculateAverage(total, numberOfSubjects){
  let average = 0;
  return total/numberOfSubjects
}

function CalculateGrade(average){
  if(average>=80){
    return "A+";
  }
  else if(average>=70){
    return "A";
  }
  else if(average>=60){
    return "B+"
  }
  else if(average>=50){
    return "B"
  }
  else if(average>=40){
    return "C+"
  }
  else{
    return "F"
  }
}


function checkResult(marks){
  for(let i=0; i<marks.length; i++){
    if(marks[i]<33){
      return "Fail";
    }
  }
  return "Pass";
}


function findHighestMark(marks){
  let highest= marks[0];
  for(let i=1; i<marks.length; i++){
    if(marks[i]>highest){
      highest=marks[i]
    }
  }
  return highest
}


function countPassedSubjects(marks){
  let count = 0;
  for(let i=0; i<marks.length; i++){
    if(marks[i]>=50){
      count++;
    }
  }
  return count;
}



let total=calculateTotal(marks);
let average=calculateAverage(total, marks.length);
let grade=CalculateGrade(average);
let result=checkResult(marks);
let highestMark=findHighestMark(marks)
let passedSub=countPassedSubjects(marks);


console.log("Student Name:", name);
console.log("Marks:", marks);
console.log("Total Marks:", total);
console.log("Average Marks:", average);
console.log("Grade:", grade);
console.log("Result:", result);
console.log("Highest Marks:", highestMark);
console.log("Passed Subjects:", passedSub);


