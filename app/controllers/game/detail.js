import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class GameDetailController extends Controller {
	@action
	selectMove (choice) {
		this._poll = setInterval(this._pollFunction, 2000);
	}

	_pollFunction () {
		console.log('cuac')
	}

	@action 
	startGame () {
		alert('game start!')
	}
}
