import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowClick = false;
  allowCreateServer = 'This is disabled for now';
  serverName = '';
  showServer = false;

  constructor() {
    setTimeout(() => {
      this.allowClick = true;
    }, 2000);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreateServer() {
    this.showServer = true;
    this.allowCreateServer =
      'Server with name ' + this.serverName + ' has been created ';
  }
}
