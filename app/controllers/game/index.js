import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Swal from 'sweetalert2';

export default class GameIndexController extends Controller {
	@service selectedUser;
	@tracked showModal;
	@tracked user = this.selectedUser.user;

	get hasMinimumData () {
		return this.user;
	}

	@action
	setUser (user) {
		this.user = user;
		this.selectedUser.user = user;
	}

	@action
	async createGame () {
		let game = await this.store.createRecord('game').save();
		await this.store.createRecord('play', {
			game,
			user: this.selectedUser.user
		}).save();
		this.transitionToRoute('game.detail', game.id);
	}

	@action
	async enterGame (game) {
		if (this.selectedUser.user) {
			let id = this.selectedUser.user.id;
			let plays = await this.store.query('play', {
				game_id: game.id
			})
			let userPlay = plays.findBy('userId', id)
			if(!userPlay) {
				await this.store.createRecord('play', {
					game,
					user: this.selectedUser.user
				}).save().then(() => {
					this.transitionToRoute('game.detail', game.id);
				}).catch(() => {
					Swal.fire({
						imageUrl: 'https://img2.thejournal.ie/inline/1035578/original/?width=500&version=1035578',
						imageWidth: 250,
						imageHeight: 175,
					})
				});
			} else {
				this.transitionToRoute('game.detail', game.id);
			}
		} else {
			Swal.fire({
				imageUrl: 'https://img2.thejournal.ie/inline/1035578/original/?width=500&version=1035578',
				imageWidth: 250,
				imageHeight: 175,
			})
		}
	}

	@action
	openModal () {
		this.showModal = true;
	}
	@action
	closeModal () {
		this.showModal = false;
	}
}