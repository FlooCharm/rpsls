import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { hash } from 'rsvp';

export default class GameDetailRoute extends Route {
	model (params) {
		return hash({
			game: this.store.findRecord('game', params.id),
			plays: this.store.query('play', {
				game_id: params.id
			})
		})
	}

	@action
	willTransition () {
		clearInterval(this.controller._poll);
	}
}
