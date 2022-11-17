module.exports = function(config) {

	var cfg = {

		browsers: ['Firefox'],

		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: [
					'--no-sandbox',
					'--autoplay-policy=no-user-gesture-required'
				]
			}
		},

		frameworks: ['jasmine'],
		browserNoActivityTimeout: 30000,
		files: [
			'distr/Pizzicato.js',
			'tests/**/*.js', {
				pattern: 'tests/**/*.*',
				watched: false,
				served: true,
				included: false
			}
		]
	};

	if (process.env.TRAVIS)
		cfg.browsers = ['Chrome_travis_ci'];

	config.set(cfg);
};
