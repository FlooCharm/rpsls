import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class GameDetailController extends Controller {
	@service selectedUser;

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
		if (this.model.game.total_users === 2)
			this.model.game.startGame();
	}
}
