import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// form;
// email;
//   constructor(private service: ContactService) { 
//     this.form = new FormGroup({
//       'name': new FormControl("", Validators.required),
//       'email': new FormControl("", Validators.required),
//       'message': new FormControl("", Validators.required)
//     });
// }

  ngOnInit(): void {
    
  }
// sendData(){
//   this.service.postSer(this.form.value).subscribe((data)=>{
//     console.log(data)
//     console.log(data.message)
// })
// alert("Your message has been sent!")
// console.log(this.form.value)
// }
}
