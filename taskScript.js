class Student {
		static count = 0;
		constructor(name, age, phone_number, board_marks) {
			Student.count++;
			this.name = name;
			this.age = age;
			this.phone_number = phone_number;
			this.board_marks = board_marks;
		}
		// checking eligiblility for college
		isEligibleOrNot() {
			if(this.board_marks >= 40){
				console.log(`${this.name} is eligible for college`);
			} else {
				console.log(`${this.name} is not eligible for college`);
			}
		}
		static countStudents(){
			console.log(`there are ${Student.count} students`);
		}
		// checking eligibility for company
		isEligibleForPlacement(minMarks) {
			return (minAge) => {
				if(this.board_marks >= minMarks && this.age >= minAge)
					console.log(`${this.name} is eligible for placement`);
				else
					console.log(`${this.name} is not eligible for placement`);
			}
		}
	}

	const student1 = new Student('archie', 19, 1234, 80);
	const student2 = new Student('richa', 18, 2345, 95);
	const student3 = new Student('akshay', 20, 3456, 39);
	const student4 = new Student('raj', 21, 5678, 38);
	const student5 = new Student('shweta', 21, 7890, 40);

	// student1.isEligibleOrNot();
	// student2.isEligibleOrNot();
	// student3.isEligibleOrNot();
	// student4.isEligibleOrNot();
	// student5.isEligibleOrNot();

	Student.countStudents();
	student1.isEligibleForPlacement(70)(19);
	student2.isEligibleForPlacement(70)(19);
	student3.isEligibleForPlacement(70)(19);
	student4.isEligibleForPlacement(70)(19);
	student5.isEligibleForPlacement(70)(19);