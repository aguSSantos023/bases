import { TitleCasePipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [TitleCasePipe],
  templateUrl: './hero-page.html',
})
export class HeroPage {

  protected readonly name: WritableSignal<string> = signal('ironman')
  protected readonly age: WritableSignal<number> = signal(45)



  /**
   * getHeroDescription
   */
  public getHeroDescription(): string {

    return `${ this.name() } - ${ this.age() }`

  }

  /**
   * changeHero
   */
  public changeHero(): void {

    this.name.set('spiderman')
    this.age.set(22)

  }

  /**
   * resetForm
   */
  public resetForm(): void {
    this.name.set('ironman')
    this.age.set(45)
  }


  /**
   * changeAge
   */
  public changeAge(): void{
    this.age.set(60)
  }



}
