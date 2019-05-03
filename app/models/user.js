import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class UserModel extends Model {
	@attr('string') username;
	@attr('string') email;

	@hasMany('play') plays;
}
