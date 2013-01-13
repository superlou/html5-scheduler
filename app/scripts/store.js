App.store = DS.Store.create({
	revision: 11,
	adapter: DS.FixtureAdapter.create()
});
var attr = DS.attr;