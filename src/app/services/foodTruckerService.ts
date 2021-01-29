import { HttpClient } from "@angular/common/http";
import { FoodTrucker } from "../models/FoodTrucker";


export class foodTruckerService {

    constructor(private http: HttpClient){ }

    getItems(){
        this.http.get<FoodTrucker>('http://localhost:8080/ttps-spring/FoodTrucker/').subscribe(data => {console.log(data.email)})
    }

}
