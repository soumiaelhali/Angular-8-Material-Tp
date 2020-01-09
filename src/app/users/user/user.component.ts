import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(private service: UserService) {}
  departments = [
    { id: 3, value: "Dep 1" },
    { id: 2, value: "Dep 2" },
    { id: 3, value: "Dep 3" }
  ];
  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }
  ngOnInit() {}
}
