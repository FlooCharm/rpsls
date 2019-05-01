import Route from '@ember/routing/route';

export default class GameIndexRoute extends Route {
	model () {
		return this.store.findAll('user');
	}
}
