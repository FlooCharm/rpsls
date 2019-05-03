import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class PlayModel extends Model {
	@attr('number') choice;
	@attr('string') userId;
	
	@belongsTo('user') user;
	@belongsTo('game') game;
}
