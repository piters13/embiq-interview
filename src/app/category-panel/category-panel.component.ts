import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Profile } from "../app.component";
import { SelectPersonDialogComponent } from "../select-person-dialog/select-person-dialog.component";

export interface DialogData {
  profile: Profile;
}

@Component({
  selector: "app-category-panel",
  templateUrl: "./category-panel.component.html",
  styleUrls: ["./category-panel.component.scss"]
})
export class CategoryPanelComponent implements OnInit {
  @Input() categoryName: string;
  @Input() people: Profile[];
  profile: Profile;
  cardsToDisplay: number;

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(["(min-width: 992px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.cardsToDisplay = 5;
        } else {
          this.cardsToDisplay = 3;
        }
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(SelectPersonDialogComponent, {
      data: { profile: this.profile }
    });

    dialogRef.afterClosed().subscribe(result => {
      result ? this.people.unshift(result) : () => null;
    });
  }
}
