import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Person, ApiService } from "../services/api.service";

@Component({
  selector: "app-select-person-dialog",
  templateUrl: "./select-person-dialog.component.html",
  styleUrls: ["./select-person-dialog.component.scss"]
})
export class SelectPersonDialogComponent implements OnInit {
  people: Person[];

  constructor(
    public dialogRef: MatDialogRef<SelectPersonDialogComponent>,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.get("peopleToSelect").subscribe(people => {
      this.people = people;
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  addToCategory(person: Person) {
    this.dialogRef.close(person);
  }
}
