import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ProfileService } from '../../api/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  edit = false
  id = ''  

  profileForm = new FormGroup({
    nameUser: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    gender: new FormControl(''),
    bio: new FormControl(''),
    photo: new FormControl('')
  });


  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {

  }



  public get_exist_profile(){
    this.edit = false
    if(this.profileForm.get('email').valid){
      this.profileService.consultarProfile(this.profileForm.get('email').value).subscribe(
        profile => {
          this.id = profile.data._id
          this.profileForm.get('nameUser').setValue(profile.data.nameUser);
          this.profileForm.get('email').setValue(profile.data.email);
          this.profileForm.get('gender').setValue(profile.data.gender);
          this.profileForm.get('bio').setValue(profile.data.bio);
          this.edit = true
        },
        error => {
          console.log(error)
        }
      );
    }
  }


  public submit(){
    if(this.edit){
      this.profileService.updateProfile(this.profileForm.value, this.id).subscribe(
        profileResponse => {
          this.profileForm.reset()
          alert('Perfil actualizado')
        },
        error => {
          console.log(error)
        }
      );
    } else {
      this.profileService.createProfile(this.profileForm.value).subscribe(
        profileResponse => {
          this.profileForm.reset()
          alert('Perfil creado')
        },
        error => {
          console.log(error)
        }
      );
    }
    // console.log(this.profileForm.value);
  }



 



  
  



  

}
