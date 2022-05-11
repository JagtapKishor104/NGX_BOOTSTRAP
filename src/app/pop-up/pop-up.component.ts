import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from "ngx-bootstrap/modal";
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopupComponents implements OnInit {

  title?: string;
  closeBtnName?: string="Close";
  btn?: string;
  value?: string;
  list: any[] = [];
  editlist: any[] = [];
  ID: any;
  showimg: boolean = false;
  empdata: any;
  message: string = "";

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    if (this.empdata) {
      // console.log(this.empdata);
      this.myform.controls["id"].setValue(this.empdata.id);
      this.myform.controls["fname"].setValue(this.empdata.first_name);
      this.myform.controls["lname"].setValue(this.empdata.last_name);
      this.myform.controls["email"].setValue(this.empdata.email);
      this.myform.controls["avatar"].setValue(this.empdata.avatar);


    }


  } 

  onFileChanged(event:any) {
    const file = event.target.files[0]
  }
 

  myform = this.fb.group(
    {
      id: new FormControl("", Validators.required),
      fname: new FormControl(""),
      lname: new FormControl(""),
      email: new FormControl(""),
      avatar: new FormControl(""),

    }
  );

  save() {
    if (!this.empdata) {
      if (this.myform.valid) {
        console.log(this.myform.value);
        this.myform.reset();
        this.bsModalRef.hide();
      }
      else {
        this.message = "All Values Are Required";
      }
    }
    else {
      this.update();
    }
  }

  update() {
    if (this.myform.valid) {
      console.log("update works=>");
      console.log("Updated Values in form", this.myform.value);
      this.myform.reset();
      this.bsModalRef.hide();

    }
  }

}
