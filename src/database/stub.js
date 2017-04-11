// TIMESTAMP UTIL
const timestamp = date => `${date.getMonth() + 1}, ${date.getDate()}, ${date.getFullYear()}`;

module.exports = function(db, schema) {

	db.sync({ force: true }).then(() => {

		schema.User.create({
			name: 'Mackenzie',
			email: 'mackenzie@redacademy.com',
			password: '12345',
		});

		schema.Week.create({
			title: 'Week 1',
			date: timestamp(new Date(2016, 8, 22)),
		}).then((week) => {

			schema.Lesson.create({
				title: 'React',
				date: timestamp(new Date(2016, 8, 22)),
			}).then((lesson) => {
				week.setLessons([lesson]);
			});

			schema.Lesson.create({
				title: 'React Router',
				date: timestamp(new Date(2016, 8, 23)),
			}).then((lesson) => {
				week.setLessons([lesson]);
			});


			schema.Lesson.create({
				title: 'React - Props & State',
				date: timestamp(new Date(2016, 8, 24)),
			}).then((lesson) => {
				week.setLessons([lesson]);
			});
		});

		schema.Week.create({
			title: 'Week 2',
			date: timestamp(new Date(2016, 8, 30)),
		}).then((week) => {
			schema.Lesson.create({
				title: 'Redux',
				date: timestamp(new Date(2016, 8, 30)),
			}).then((lesson) => {
				week.setLessons([lesson]);
			});

			schema.Lesson.create({
				title: 'Functional Programming',
				date: timestamp(new Date(2016, 9, 1)),
			}).then((lesson) => {
				week.setLessons([lesson]);
			});

			schema.Lesson.create({
				title: 'Container Components',
				date: timestamp(new Date(2016, 9, 2)),
			}).then((lesson) => {
				week.setLessons([lesson]);
			});
		});

		schema.Week.create({
			title: 'Week 3',
			date: timestamp(new Date(2016, 9, 7)),
		}).then((week) => {
			schema.Lesson.create({
				title: 'Introduction to SQL',
				date: timestamp(new Date(2016, 9, 7)),
			}).then((lesson) => {
				week.setLessons([lesson]);
			});

			schema.Lesson.create({
				title: 'Postgres',
				date: timestamp(new Date(2016, 9, 8)),
			}).then((lesson) => {
				week.setLessons([lesson]);
			});

			schema.Lesson.create({
				title: 'Database Schemas',
				date: timestamp(new Date(2016, 9, 9)),
			}).then((lesson) => {
				week.setLessons([lesson]);
			});
		});

		schema.Post.create({
			author: 'Mackenzie Kieran',
			votes: 0,
			title: 'Using React is easy!',
			description: 'A link to a great react resource.',
			link: 'http://www.github.com',
		}).then((post) => {
			post.setLesson(2);
			post.setTags([2, 3]);
		});

		schema.Post.create({
			author: 'Mackenzie Kieran',
			votes: 0,
			title: 'Using React is difficult',
			description: 'Chess is not an Olympic sprort.',
			link: 'http://www.github.com',
		}).then((post) => {
			post.setLesson(3);
			post.setTags([1, 2, 3]);
		});

		schema.Post.create({
			author: 'Mackenzie Kieran',
			votes: 0,
			title: 'Using React is not difficult',
			description: 'Chess should be an olympic sport.',
			link: 'http://www.github.com',
		}).then((post) => {
			post.setLesson(3);
			post.setTags([1, 3]);
		});

		const tags = [
			'React',
			'React Router',
			'Functional Programming',
			'JavaScript',
			'React',
			'Redux',
			'Components',
			'ES6',
			'Databases',
			'SQL',
			'MongoDB',
			'Meteor',
			'React Native',
		];

		tags.forEach(tag => schema.Tag.create({ name: tag }));
	});
}