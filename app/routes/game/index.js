import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class GameIndexRoute extends Route {
	model () {
		return this.store.findAll('game');
	}
}
