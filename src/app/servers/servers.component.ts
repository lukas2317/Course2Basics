import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  ServerCreationStatus = 'No Server was created!';
  ServerName = 'blabla';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.ServerName);
    this.ServerCreationStatus = 'Server was created! Name is' + this.ServerName;
  }
  onUpdateServerName(event: any) {
    this.ServerName = event.target.value;
    // console.log(event);
  }
}
