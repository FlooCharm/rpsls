import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class GameDetailController extends Controller {
	@service selectedUser;

	@tracked isLoading;

	@computed('model.plays.[]')
	get moves () {
		let moves = {};
		this.model.plays.forEach(item => {
			if (item.userId === this.selectedUser.user.id)
				moves.userMove = item.choiceIcon;
			else
				moves.opponentMove = item.choiceIcon;
		});
		return moves;
	}

	@action
	selectMove (choice) {
		if (this.model.game.status === 2) {
			let id = this.selectedUser.user.id;
			let play = this.get('model.plays').findBy('userId', id);
			play.set('choice', choice);
			play.save();
		}
	}

	@action 
	async startGame () {
		this.isLoading = true;
		if (this.model.game.totalUsers === 2) {
			await this.model.game.startGame();
			this.isLoading = false;
		}
	}
}
