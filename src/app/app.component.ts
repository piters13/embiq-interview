import { Component } from "@angular/core";

export interface Profile {
  firstname: string;
  lastname: string;
  position: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  team = [
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
      firstname: "Jessica",
      lastname: "Miles",
      position: "Database administrator"
    }
  ];

  peers = [
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
    }
  ];

  manager = [
    {
      firstname: "Grant",
      lastname: "Marshall",
      position: "Clinical Laboratory"
    }
  ];

  others = [
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
    }
  ];

  constructor() {}

  noop = () => null;
}
