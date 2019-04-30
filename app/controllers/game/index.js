import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class GameIndexController extends Controller {
	@action
	createGame () {
		alert('game created!');
	}
}
