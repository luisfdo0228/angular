import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-profile',
  templateUrl: './photo-profile.component.html',
  styleUrls: ['./photo-profile.component.css']
})
export class PhotoProfileComponent implements OnInit {

  url:any = '';

  constructor() { }

  ngOnInit(): void {
  }


  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

}
