import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

flag:number;

show(obj:number) {
  this.flag = obj;
}

registerForm: FormGroup;
submitted = false;

//model: any = {};

constructor(private formBuilder: FormBuilder) { }

ngOnInit() {
  this.registerForm = this.formBuilder.group({
  cbname: ['', Validators.required],
  group: ['', Validators.required],
  mdate: ['', Validators.required],
  aname: ['', Validators.required],
  gender: ['', Validators.required],
  mstatus: ['', Validators.required],
  alname: ['', Validators.required],
  mnumber: ['', Validators.required]
  // lastName: ['', Validators.required],
  // email: ['', [Validators.required, Validators.email]],
  // password: ['', [Validators.required, Validators.minLength(6)]]
  });
}

get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}

}
