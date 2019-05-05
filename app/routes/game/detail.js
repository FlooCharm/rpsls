import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default class GameDetailRoute extends Route {
	@service selectedUser;

	beforeModel () {
		if (!this.selectedUser.user)
			this.transitionTo('game.index');
	}

	model (params) {
		this.gameId = params.id;
		return hash({
			game: this.store.findRecord('game', params.id),
			plays: this.store.query('play', {
				game_id: params.id
			}),
		})
	}

	@action
	willTransition () {
		clearInterval(this._poll);
	}

	@action
	didTransition () {
		this._poll = setInterval(async () => {
			let game = await this.store.findRecord('game', this.gameId);
			let plays = await this.store.query('play', { game_id: this.gameId });
			this.set('controller.model.game', game);
			this.set('controller.model.plays', plays);
		}, 1500);
	}
}
