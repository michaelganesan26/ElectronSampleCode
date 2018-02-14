import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  

  constructor(private electronService:ElectronService){}

  //launch the window to test the electron service
  launchWindow(){
      let currentUrl = 'https://www.cnet.com';
      this.electronService.shell.openExternal(currentUrl);

  }


  closeMainWindow():void {
     //This is how you close the main window from within angular
       this.electronService.remote.getCurrentWindow().close();

  }



}
