import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GameIndexController extends Controller {
	@tracked selectedUser;

	@action
	enterGame () {
		alert('entering game!');
	}
}