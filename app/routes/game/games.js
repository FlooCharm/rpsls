import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class GameGamesRoute extends Route {
	model (params) {
		return hash({
			user: this.store.findRecord('user', params.user_id),
			games: this.store.findAll('game')
		})
	}
}
