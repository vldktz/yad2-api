module.exports = {
    apps: [{
        name: 'yad2',
        script: 'app.js',
        watch: 'true',
        env: {
            "PORT": "3006",
            "APP_NAME": "yad2-API",
            "JWT_SECRET": "kd9d754dkO!Khd52k$dd",
            "DOMAIN": "localhost",
            "API_DOMAIN": "localhost:3006",
            "APP_DOMAIN": "http://localhost:4002",
            "WHITE_LIST": "http://localhost:4200",
            "DB_USERNAME": "root",
            "DB_HOST": "localhost",
            "DB_PASSWORD": "",
            "DB_NAME": "yad2",

        }
    }
    ]
};
