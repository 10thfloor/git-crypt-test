module.exports = function(schema) {

	schema.User.hasMany(schema.Post);
	schema.Post.belongsTo(schema.User);

	schema.Tag.belongsToMany(schema.Post, { through: 'PostTags' });
	schema.Post.belongsToMany(schema.Tag, { through: 'PostTags' });

	schema.Lesson.belongsTo(schema.Week);
	schema.Week.hasMany(schema.Lesson);

	schema.Post.belongsTo(schema.Lesson);
	schema.Lesson.hasMany(schema.Post);

}


