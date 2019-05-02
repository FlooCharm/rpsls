import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class GameDetailRoute extends Route {
	model (params) {
		return this.store.findRecord('game', params.id);
	}

	@action
	willTransition () {
		clearInterval(this.controller._poll);
	}
}
