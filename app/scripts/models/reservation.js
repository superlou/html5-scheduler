App.Reservation = DS.Model.extend({
	reservee: DS.belongsTo('App.Event'),
	reservable: DS.belongsTo('App.Reservable'),
	schedule: DS.belongsTo('App.Schedule'),

	startTime: attr('date'),
	endTime: attr('date'),

	styleReservationLeft: function() {
		var offsetLeft = 0;

		if (schedule = this.get('schedule')) {
			var schedule_start = moment(schedule.get('startTime'));
			var reservation_start = moment(this.get('startTime'));
			var offsetLeft = (reservation_start - schedule_start)/(60*60*1000);
			offsetLeft *= schedule.get('hourWidth');
		}		

		return "left:"+offsetLeft+"px";
	}.property('startTime', 'schedule.startTime', 'schedule.hourWidth'),

	styleReservationWidth: function() {
		var width = 0;

		if (schedule = this.get('schedule')) {
			var hourWidth = schedule.get('hourWidth');
			width = (this.get('endTime') - this.get('startTime'))/(60*60*1000)*hourWidth-2;
		}

		return "width:"+width+"px";
	}.property('startTime', 'endTime', 'schedule.hourWidth'),

	styleReservation: function() {
		return this.get('styleReservationLeft')
			+ ";"
			+ this.get('styleReservationWidth');
	}.property('styleReservationLeft', 'styleReservationWidth')
});