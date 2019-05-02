import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GameDetailController extends Controller {
	@service selectedUser;

	@action
	selectMove (choice) {
		let play = this.model.plays.findBy('id', this.selectedUser.user.id);
		console.log(play)
		this._poll = setInterval(() => {
			
		}, 5000);
	}

	@action 
	startGame () {
		alert('game start!')
	}
}
