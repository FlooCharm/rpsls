import Route from '@ember/routing/route';

export default class GameDetailRoute extends Route {
	model (params) {
		return this.store.findRecord('game', params.id);
	}
}
