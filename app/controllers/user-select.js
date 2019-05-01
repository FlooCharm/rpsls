import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class UserSelectController extends Controller {
	@tracked user;
	@service selectedUser;

	get hasMinimumData () {
		return this.user;
	}

	@action
	enterGame () {
		this.selectedUser.user = this.user;
		this.transitionToRoute('game.index');
	}
}