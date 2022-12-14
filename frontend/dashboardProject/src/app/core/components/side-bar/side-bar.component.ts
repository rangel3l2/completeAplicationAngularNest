import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  isMenuOpen = true;
  contentMargin = 240;

  onToolBarMenuToggle(){
    console.log("On toobar toggled", this.isMenuOpen);
    this.isMenuOpen =!this.isMenuOpen;

    if(!this.isMenuOpen){
      this.contentMargin = 100;

    }
    else{
      this.contentMargin = 240;
    }
  }

}
