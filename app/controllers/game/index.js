import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class GameIndexController extends Controller {
	@service selectedUser;

	@action
	async createGame () {
		let game = await this.store.createRecord('game').save();
		this.transitionToRoute('game.detail', game.id);
	}

	@action
	enterGame (id) {
		this.transitionToRoute('game.detail', id);
	}
}