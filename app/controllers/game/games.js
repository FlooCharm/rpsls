import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class GameGamesController extends Controller {
	@action
	createGame () {
		alert('game created!');
	}

	@action
	enterGame (id) {
		this.transitionToRoute('game.detail', id);
	}
}
