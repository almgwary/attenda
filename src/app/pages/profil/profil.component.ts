import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  user: User = new User();
  constructor(private sharedData: SharedDataService) { }

  ngOnInit() {
    this.sharedData.user.subscribe(
      data => {
        this.user = data;
      }
    );

    this.user = this.sharedData.user.getValue();
  }

  logout() {
    this.sharedData.logout();
  }

}
