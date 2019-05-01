import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class GameIndexController extends Controller {
	@service selectedUser;

	@action
	async createGame () {
		let game = await this.store.createRecord('game').save();
		await this.store.createRecord('play', {
			game,
			user: this.selectedUser.user
		}).save();
		this.transitionToRoute('game.detail', game.id);
	}

	@action
	async enterGame (game) {
		await this.store.createRecord('play', {
			game,
			user: this.selectedUser.user
		}).save();
		this.transitionToRoute('game.detail', game.id);
	}
}