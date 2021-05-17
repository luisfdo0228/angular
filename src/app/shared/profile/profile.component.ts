import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  

  profileForm = new FormGroup({
    nameUser: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    gender: new FormControl(''),
    bio: new FormControl(''),
    photo: new FormControl('')
  });


  constructor() { }

  ngOnInit(): void {
  }

  public get_exist_profile(){
    if(this.profileForm.get('email').valid){
      console.log('conectar con servicio que devuelve si existe o no el perfil');
    }
  }


  public submit(){
    console.log(this.profileForm.value);
  }



  
  



  

}
