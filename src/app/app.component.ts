import { Component, OnInit } from "@angular/core";
import { ApiService, Person } from "./services/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  team: Person[];
  peers: Person[];
  manager: Person[];
  others: Person[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get("team").subscribe(people => {
      this.team = people;
    });

    this.apiService.get("peers").subscribe(people => {
      this.peers = people;
    });

    this.apiService.get("manager").subscribe(people => {
      this.manager = people;
    });

    this.apiService.get("others").subscribe(people => {
      this.others = people;
    });
  }

  noop = () => null;
}
