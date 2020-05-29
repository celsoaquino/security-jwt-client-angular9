import { JwtClientService } from './../jwt-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest: any = {
    "userName": "celso",
    "password": "password"
  }

  response: any;

  constructor(
    private service: JwtClientService
  ) { }

  ngOnInit() {
    this.getAcesseToken(this.authRequest);
  }

  public getAcesseToken(authRequest) {
    let resp = this.service.generateToken(authRequest);
    resp.subscribe( data => this.accessApi(data));

  }

  public accessApi(token) {
    let resp = this.service.welcome(token);
    resp.subscribe(data => this.response = data);
  }

}
