module.exports =  ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', '14.225.207.22'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'cms'),
			user: env('DATABASE_USERNAME', 'andreahair_admin'),
			password: env('DATABASE_PASSWORD', 'm4Xi1gSbdzns@U+'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
