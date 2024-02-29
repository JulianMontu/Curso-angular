import { Injectable } from '@angular/core';
import { Character } from '../Interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 100
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        }
    ];

    addCharacter(character: Character): void {
        //spred caracter, toma todas sus propiedades y esparcelas en este nuevo objeto
        const newCharacter: Character = {id: uuid(), ...character}

        this.characters.push(newCharacter);
    }

    onDeleteCharacter(index:number){
        this.characters.splice(index,1);
    }

    deleteCharacterById(id: string){
        this.characters = this.characters.filter( character => character.id !== id);
    }
    
}