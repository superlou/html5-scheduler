App.Reservable.FIXTURES = [
	{
		id: 1,
		name: 'Room A',
		reservations: [1]
	},	{
		id: 2,
		name: 'Room B',
		reservations: [2]
	},	{
		id: 3,
		name: 'Room C'
	}
]

App.Event.FIXTURES = [
	{
		id: 1,
		name: 'Event A'
	},	{
		id: 2,
		name: 'Event B'
	}
]

App.Schedule.FIXTURES = [
	{
		id: 1,
		reservables: [1, 2, 3],
		startTime: "2013-01-01T18:00:00Z",
		endTime: "2013-01-01T23:00:00Z"
	}
]

App.Reservation.FIXTURES = [
	{	
		id: 1,
 		reservee: 1,
		reservable: 1,
		schedule: 1,
		startTime: "2013-01-01T19:00:00Z",
		endTime: "2013-01-01T20:00:00Z"
	}, {
		id: 2,
		reservee: 2,
		reservable: 2,
		schedule: 1,
		startTime: "2013-01-01T19:30:00Z",
		endTime: "2013-01-01T20:30:00Z"
	}
]