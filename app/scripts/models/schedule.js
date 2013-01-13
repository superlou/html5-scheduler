App.Schedule = DS.Model.extend({
	reservables: DS.hasMany('App.Reservable'),
	reservations: DS.hasMany('App.Reservation'),

	startTime: attr('date'),
	endTime: attr('date'),

	hourWidth: 120,
	hourWidthDelta: 60,

	hours: function() {
		var hour_titles = [];

		var hour = moment(this.get('startTime')).clone().minutes(0).seconds(0);
		var last_hour = moment(this.get('endTime')).clone().minutes(0).seconds(0);

		while (hour < last_hour) {	
			hour_titles.push(hour.format("h:mma"));
			hour.add('hours', 1);
		}

		return hour_titles;
	}.property('startTime', 'endTime')
});