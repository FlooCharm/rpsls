import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { action } from '@ember/object';

export default class GameIndexRoute extends Route {
	model () {
		return this.store.findAll('game');
	}

	@action
	didTransition () {
		this._poll = setInterval(async () => {
			this.controller.set('model', await this.store.findAll('game'));
		}, 5000);
	}

	@action
	willTransition () {
		clearInterval(this._poll);
	}
}
