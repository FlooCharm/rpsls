import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';

export default class ApplicationAdapter extends ActiveModelAdapter {
	host = 'https://polar-basin-61192.herokuapp.com/'
}
