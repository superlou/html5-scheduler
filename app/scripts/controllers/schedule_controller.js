App.ScheduleController = Ember.ObjectController.extend({
	expand: function() {
		currentHourWidth = this.get('hourWidth');
		this.set('hourWidth', currentHourWidth + this.get('hourWidthDelta'))
	},

	contract: function() {
		currentHourWidth = this.get('hourWidth');
		if (currentHourWidth - this.get('hourWidthDelta') > 0) {
			this.set('hourWidth', currentHourWidth - this.get('hourWidthDelta'))
		}
	},

	styleMatrixExpanderWidth: function() {
		return "width:" + (this.get('hourWidth') * (this.get('hours').length))  + "px";
	}.property('hourWidth', 'hours'),

	styleHourWidth: function() {
		return "width:" + (this.get('hourWidth')-5) + "px";
	}.property('hourWidth')
});