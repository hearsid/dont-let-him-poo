import { Component } from "@angular/core";
import { ChoreographerService } from "../../services/choreographer/choreographer.service";
import { GAME_STATES } from "../../services/choreographer/choreographer.model";
import { SalaryService } from "../../services/salary.service";
@Component({
  selector: "dlp-game-over",
  templateUrl: "./game-over.component.html",
  styleUrls: ["./game-over.component.css"]
})
export class GameOverComponent {
  game_states = GAME_STATES;

  constructor(
    public choreographerService: ChoreographerService,
    public salaryService: SalaryService
  ) {}

  restartGame() {
    this.choreographerService.currentGameState = GAME_STATES.LOAD;
  }
}
