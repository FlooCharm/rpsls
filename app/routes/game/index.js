import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { action } from '@ember/object';

export default class GameIndexRoute extends Route {
	model () {
		return hash({
			games: this.store.findAll('game'),
			players: this.store.findAll('user')
		})
	}

	@action
	didTransition () {
		this._poll = setInterval(async () => {
			this.controller.set('model.games', await this.store.findAll('game'));
		}, 5000);
	}

	@action
	willTransition () {
		clearInterval(this._poll);
	}
}
