import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class GameModel extends Model {
	@attr('string') code;
	@attr('number') status;
	@attr('number') totalUsers;
	@attr('string') winnerName;

	@belongsTo('user') winner;
}
