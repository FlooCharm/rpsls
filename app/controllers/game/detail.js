import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GameDetailController extends Controller {
	@service selectedUser;

	@action
	selectMove (choice) {
		let id = this.selectedUser.user.id;
		let play = this.get('model.plays').findBy('userId', id);
		play.set('choice', choice);
		play.save();
		this._poll = setInterval(() => {
			
		}, 5000);
	}

	@action 
	startGame () {
		alert('game start!')
	}
}
