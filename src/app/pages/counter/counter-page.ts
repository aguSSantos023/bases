import { Component, signal } from "@angular/core";



@Component({
  selector:'app-counter-page',
  templateUrl: './counter-page.html'
})
export class CounterPage {

  public readonly number = signal(0)

  /**
   * incrementNumber
   */
  public incrementNumber(num: number): void {
    let newNumber = num + 1
    this.number.set(newNumber)
  }

  /**
   * desincrementNumber
   */
  public desincrementNumber() {
    this.number.update(currentValue => currentValue - 1)
  }

  /**
   * resetNumber
   */
  public resetNumber() {
    this.number.set(0)
  }
}
