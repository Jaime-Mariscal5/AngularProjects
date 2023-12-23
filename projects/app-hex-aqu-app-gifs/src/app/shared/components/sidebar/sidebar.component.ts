import { Component} from '@angular/core';
import { TagHistory } from '../../../modules/gifs/application/TagHistory.app';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private readonly tagHistory: TagHistory  ){}
  
  get Tags(){
    return this.tagHistory.getHistory();
  }

  onButtonClick(tag: string): void {
    this.tagHistory.OrganizeHistory(tag);
  }

}
