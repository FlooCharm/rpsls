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
	async selectMove (choice) {
		if (this.model.game.status === 2) {
			let id = this.selectedUser.user.id;
			let newPlays = this.model.plays.map(item => {
				if (item.userId === this.selectedUser.user.id)
					item.set('choice', choice);
				return item
			});
			this.set('model.plays', newPlays);
			let play = this.get('model.plays').findBy('userId', id);
			play.set('choice', choice);
			let updatedPlay = await play.save();
		}
	}

	@action 
	async startGame () {
		this.isLoading = false;
		if (this.model.game.totalUsers === 2) {
			let game = await this.model.game.startGame();
			this.set('model.game', game);
			this.isLoading = true;
		}
	}
}
