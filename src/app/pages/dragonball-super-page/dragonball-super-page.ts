import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../shared/components/character-list/character-list.component";
import { CharacterAdd } from "../../shared/components/character-add/character-add";
import { Dragonball } from '../../services/dragonball';



@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterListComponent, CharacterAdd],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {

  dragonballService = inject(Dragonball)




}
