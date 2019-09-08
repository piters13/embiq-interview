import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-profile-card",
  templateUrl: "./profile-card.component.html",
  styleUrls: ["./profile-card.component.scss"]
})
export class ProfileCardComponent {
  @Input() firstname: string;
  @Input() lastname: string;
  @Input() position: string;

  constructor() {}
}
