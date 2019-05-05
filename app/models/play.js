import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class PlayModel extends Model {
	@attr('number') choice;
	@attr('string') userId;
	
	@belongsTo('user') user;
	@belongsTo('game') game;

	get choiceIcon () {
		if (this.choice === 1)
			return 'hand-rock'
		else if (this.choice === 2)
			return 'hand-paper'
		else if (this.choice === 3)
			return 'hand-scissors'
		else if (this.choice === 4)
			return 'hand-lizard'
		else if (this.choice === 5)
			return 'hand-spock'
	}
}
