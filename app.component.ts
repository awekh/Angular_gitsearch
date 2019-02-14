import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  userName: string = "";
  response: any;

  constructor(private http: HttpClient) {

  }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response)=>{
      this.response = response;
      console.log(response)
    }
    )
  }
}
