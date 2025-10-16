import { Component, input, output, signal, WritableSignal } from '@angular/core';
import { Character } from '../../../interface/character';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  public name: WritableSignal<string> = signal('')
  public power: WritableSignal<number> = signal(0)

  characters = input.required<Character[]>()

  newCharacter = output<Character>();

  /**
   * addCharacter
   */
  public addCharacter() {

    if (!this.name() || !this.power()) return
    console.log(this.name(), this.power());


    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    }

    this.newCharacter.emit(newCharacter)

    this.resetFiels()
  }

  /**
   * resetFiels
   */
  public resetFiels() {
    this.name.set('')
    this.power.set(0)
  }

}
