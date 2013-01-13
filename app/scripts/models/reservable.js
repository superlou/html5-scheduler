App.Reservable = DS.Model.extend({
	name: attr('string'),
	reservations: DS.hasMany('App.Reservation')
});