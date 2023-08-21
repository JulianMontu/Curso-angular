import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../Interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input()
  public characterList: Character[] = [
    {name: 'Trunks',
    power:1000
    }
  ]

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter()

  onDeleteCharacter(index: number):void{
    this.onDelete.emit(index);
  }

}
