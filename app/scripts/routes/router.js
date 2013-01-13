App.Router.map(function(match) {
	match('/').to('index');
	match('/schedule').to('schedule');
});

App.ScheduleRoute = Ember.Route.extend({
	model: function(params) {
		return App.Schedule.find(1);
	}
});