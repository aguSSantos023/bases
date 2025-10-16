import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interface/character';

  const loadFromLocalStorage = (): Character[]=>{
    const character = localStorage.getItem('key')

    return character ? JSON.parse(character) : []
  }


@Injectable({
  providedIn: 'root'
})
export class Dragonball {

  public characters = signal<Character[]>(loadFromLocalStorage())


  saveToLocalStorage = effect(()=>{

    console.log("character count", this.characters().length);
    localStorage.setItem('key', JSON.stringify(this.characters()) )

  })



  /**
   * addCharacter
   */
  public addCharacter(newCharacter: Character) {

    this.characters.update( listCharacter => [...listCharacter, newCharacter])

  }


}
