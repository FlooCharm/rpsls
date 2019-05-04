import DS from 'ember-data';
const { Model, attr, belongsTo, hasMany } = DS;
import { memberAction } from 'ember-api-actions';

export default class GameModel extends Model {
	@attr('string') code;
	@attr('number') status;
	@attr('number') totalUsers;
	@attr('string') winnerName;

	@belongsTo('user') winner;
	@hasMany('play') plays;


	get startGame () {
		return memberAction({ path: 'start' });
	}
}
