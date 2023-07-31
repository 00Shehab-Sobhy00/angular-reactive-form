
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-submit-promt-component',
  templateUrl: './submit-promt.component.html',
  styleUrls: ['./submit-promt.component.css']
})
export class SubmitPromtComponent {



  myForm: any;
  constructor(
    private dialogRef: MatDialogRef<SignUpComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

   this.myForm = data.form;

  }

  Submit(){

    console.log(this.myForm);
    this.myForm.reset();
    
    this.dialogRef.close();
  }



  Cancel(): void {
    this.dialogRef.close();
  }

}
