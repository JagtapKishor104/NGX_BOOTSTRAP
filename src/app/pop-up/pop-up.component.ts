import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from "ngx-bootstrap/modal";
import { ApiService } from '../api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopupComponents implements OnInit {

  title?: string;
  closeBtnName?: string = "Close";
  btn?: string;
  value?: string;
  list: any[] = [];
  editlist: any[] = [];
  ID: any;
  showimg: boolean = false;
  empdata: any;
  message: string = "";
  imgFile!: any;
  imageSrc: any;
  logoimage!: string;
  avatar!: string;
  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    public api: ApiService
  ) { }

  ngOnInit(): void {
    if (this.empdata) {
      console.log(this.empdata);
      this.avatar = this.empdata.avatar

      this.myform.controls["id"].setValue(this.empdata.id);
      this.myform.controls["fname"].setValue(this.empdata.first_name);
      this.myform.controls["lname"].setValue(this.empdata.last_name);
      this.myform.controls["email"].setValue(this.empdata.email);
      // this.myform.controls["avatar"].setValue(this.empdata.avatar);
    }

  }


  onFileChanged(e: any) {

    if (e.target.files && e.target.files.length) {
      const reader = new FileReader();
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result;
        this.myform.patchValue({
          avatar: reader.result,
        });

        // for image load or preview
        const reader1 = new FileReader();

        const avatar = e.target.files[0];
        reader1.onload = e => this.imageSrc = reader1.result;
        reader1.readAsDataURL(avatar);

        // 


      };
    }
  }


  myform = this.fb.group(
    {
      id: new FormControl("", Validators.required),
      fname: new FormControl(""),
      lname: new FormControl(""),
      email: new FormControl(""),
      avatar: new FormControl(null),

    }
  );

  saveData() {
    if (!this.empdata) {
      if (this.myform.valid) {
        
        Swal.fire({
          title: 'Do You Want Add',
          text: "",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Add it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Saved',
              'Data Saved Successfully',
              'success',
              
            )
            console.log(this.myform.value);
            this.myform.reset();
            this.bsModalRef.hide();

          }
          else
          {
            this.bsModalRef.hide();
          }
       

        })
       
       
       
        // alert("Data Added")
      }
      else {
        this.message = "All Values Are Required";
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'All Values Are Required'
        })
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
      // alert("Updated");
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Updated successfully'
      })


    }
  }

}
