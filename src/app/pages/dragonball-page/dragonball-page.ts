import { Component, computed, signal, WritableSignal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css'
})
export class DragonballPage {

  public name: WritableSignal<string> = signal('')
  public power: WritableSignal<number> = signal(0)




  public characters = signal<Character[]>([
    { id: 0, name: 'Goku', power: 9001 },
    { id: 1, name: 'Vegeta', power: 801 },
    { id: 2, name: 'Vegeta', power: 301 },

  ])





  /**
   * addCharacter
   */
  public addCharacter() {
    console.log(this.name(), this.power());

    if (!this.name() || !this.power()) return
    console.log(this.name(), this.power());


    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update( listCharacter => [...listCharacter, newCharacter])

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
