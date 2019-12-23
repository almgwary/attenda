import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() user ;
  imageLoaded = false;
  constructor() { }

  ngOnInit() {
  }
  picLoaded() {
    setTimeout(() => {
      this.imageLoaded =  true;
    }, 1000);
  }

}
