import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GameGamesController extends Controller {
	@tracked userId;
	
	@action
	createGame () {
		alert('game created!');
	}

	@action
	enterGame (id) {
		this.transitionToRoute('game.detail', id);
	}
}
