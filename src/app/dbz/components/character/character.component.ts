import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../Interfaces/character.interface';

@Component({
  selector: 'app-add-dbz-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Output()

  //propiedad => de un objeto emmiter
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter() {
    console.log(this.character);
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };
  }
}
