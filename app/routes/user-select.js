import Route from '@ember/routing/route';

export default class UserSelectRoute extends Route {
	model () {
		return this.store.findAll('user');
	}
}
