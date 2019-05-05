import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class GameDetailController extends Controller {
	@service selectedUser;

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
	startGame () {
		if (this.model.game.totalUsers === 2) {
			this.model.game.startGame();
		}
	}
}
