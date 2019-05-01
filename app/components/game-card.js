import Component from '@glimmer/component';

export default class GameCardComponent extends Component {
	get color () {
		if(this.args.game.status === 1) {
			return 'new';
		} else if (this.args.game.status === 2) {
			return 'active';
		} else {
			return 'inactive';
		}
	}
}
