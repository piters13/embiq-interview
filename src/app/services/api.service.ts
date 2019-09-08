import { Injectable } from "@angular/core";
import { of } from "rxjs";

export interface Person {
  firstname: string;
  lastname: string;
  position: string;
}

@Injectable({
  providedIn: "root"
})
export class ApiService {
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

  peopleToSelect: Person[] = [
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

  constructor() {}

  get = (type: string) => {
    switch (type) {
      case "team":
        return of(this.team);
      case "peers":
        return of(this.peers);
      case "manager":
        return of(this.manager);
      case "others":
        return of(this.others);
      case "peopleToSelect":
        return of(this.peopleToSelect);
      default:
        return;
    }
  };
}
