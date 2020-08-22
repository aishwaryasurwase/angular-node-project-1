import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { FileUploadService } from '../services/file-upload.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userForm: FormGroup;
  emailID: String;
  result: any;
  edit: boolean = true;
  view: boolean = false;
  fileToUpload: File = null;
  formData: FormData = new FormData();

  constructor(private usersService: UsersService, private fileUploadService: FileUploadService, private snackBar: MatSnackBar) {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      emailID: new FormControl('', Validators.required),
      mobileNO: new FormControl('', Validators.required),
      nationality: new FormControl('INDIA')
    })
  }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.formData.append('fileKey', this.fileToUpload, this.fileToUpload.name);

    this.usersService.fileUpload(this.formData).subscribe(res => {
      console.log("file upload ", res);
    })
  }

  downloadAddhar(){
    console.log(this.result.imagePath);
  }
  
  onSubmit() {
    this.emailID = this.userForm.controls.emailID.value;

    var obj = {
      name: this.userForm.controls.name.value,
      emailID: this.userForm.controls.emailID.value,
      mobileNO: this.userForm.controls.mobileNO.value,
      nationality: this.userForm.controls.nationality.value,
    }

    this.usersService.saveData(obj).subscribe(res => {
      console.log("Save data ", res);
      this.snackBar.open('Data added successfully', 'X', {
        duration: 1000
      });
      this.usersService.getUserData(this.emailID).subscribe((res: any) => {
        console.log("GET DATA ", res.data[0]);
        this.result = res.data[0];
      })
    })
  }

}
