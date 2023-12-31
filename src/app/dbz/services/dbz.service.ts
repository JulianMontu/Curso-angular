import { Injectable } from '@angular/core';
import { Character } from '../Interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character[] = [
        {
            name: 'Krilin',
            power: 100
        },
        {
            name: 'Goku',
            power: 9500
        },
        {
            name: 'Vegeta',
            power: 7500
        }
    ];

    onNewCharacter(character: Character): void {
        this.characters.push(character);
    }

    onDeleteCharacter(index:number){
        this.characters.splice(index,1);
    }
    
}