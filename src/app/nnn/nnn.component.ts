import { Component } from '@angular/core';

@Component({
  selector: 'app-nnn',
  templateUrl: './nnn.component.html',
  styleUrls: ['./nnn.component.css']
})
export class NnnComponent {
  selectedDepartments: string[] = [];

  toggleCheckbox(department: string) {
    if (this.selectedDepartments.includes(department)) {
      // If department is already in the array, remove it when unchecked
      this.selectedDepartments = this.selectedDepartments.filter(item => item !== department);
    } else {
      // If department is not in the array, add it when checked
      this.selectedDepartments.push(department);
    }
  }

}
