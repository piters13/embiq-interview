import { Component, Inject } from "@angular/core";
import { Profile } from "../app.component";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "../category-panel/category-panel.component";

@Component({
  selector: "app-select-person-dialog",
  templateUrl: "./select-person-dialog.component.html",
  styleUrls: ["./select-person-dialog.component.scss"]
})
export class SelectPersonDialogComponent {
  peopleToSelect: Profile[] = [
    {
      firstname: "Grant",
      lastname: "Marshall",
      position: "Clinical Laboratory"
    },
    {
      firstname: "Pena",
      lastname: "Valdez",
      position: "Patrol officer"
    },
    {
      firstname: "Jessica",
      lastname: "Miles",
      position: "Database administrator"
    },
    {
      firstname: "Kerri",
      lastname: "Barber",
      position: "Zoologist"
    },
    {
      firstname: "Natasha",
      lastname: "Gamble",
      position: "Chef"
    },
    {
      firstname: "White",
      lastname: "Castaneda",
      position: "Occupational therapis"
    },
    {
      firstname: "Grant",
      lastname: "Marshall",
      position: "Clinical Laboratory"
    },
    {
      firstname: "Pena",
      lastname: "Valdez",
      position: "Patrol officer"
    },
    {
      firstname: "Jessica",
      lastname: "Miles",
      position: "Database administrator"
    },
    {
      firstname: "Kerri",
      lastname: "Barber",
      position: "Zoologist"
    },
    {
      firstname: "Natasha",
      lastname: "Gamble",
      position: "Chef"
    },
    {
      firstname: "White",
      lastname: "Castaneda",
      position: "Occupational therapis"
    },
    {
      firstname: "Grant",
      lastname: "Marshall",
      position: "Clinical Laboratory"
    },
    {
      firstname: "Pena",
      lastname: "Valdez",
      position: "Patrol officer"
    },
    {
      firstname: "Jessica",
      lastname: "Miles",
      position: "Database administrator"
    },
    {
      firstname: "Kerri",
      lastname: "Barber",
      position: "Zoologist"
    },
    {
      firstname: "Natasha",
      lastname: "Gamble",
      position: "Chef"
    },
    {
      firstname: "White",
      lastname: "Castaneda",
      position: "Occupational therapis"
    },
    {
      firstname: "Grant",
      lastname: "Marshall",
      position: "Clinical Laboratory"
    },
    {
      firstname: "Pena",
      lastname: "Valdez",
      position: "Patrol officer"
    },
    {
      firstname: "Jessica",
      lastname: "Miles",
      position: "Database administrator"
    },
    {
      firstname: "Kerri",
      lastname: "Barber",
      position: "Zoologist"
    },
    {
      firstname: "Natasha",
      lastname: "Gamble",
      position: "Chef"
    },
    {
      firstname: "White",
      lastname: "Castaneda",
      position: "Occupational therapis"
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<SelectPersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  addToCategory(person: Profile) {
    this.dialogRef.close(person);
  }
}
