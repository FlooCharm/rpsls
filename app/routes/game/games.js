import Route from '@ember/routing/route';

export default class GameGamesRoute extends Route {
	model () {
		return this.store.findAll('game');
	}
}
