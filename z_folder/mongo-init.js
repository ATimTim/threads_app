print('Start #################################################################');

db.auth('root', 'password')

// Проверяем, существует ли база данных 'app_database'
var dbExists = adminDb.getMongo().getDBNames().indexOf('app_database') >= 0;

// Если базы данных не существует, создаем ее
if (!dbExists) {
  adminDb.create('app_database');
  print('База данных "app_database" создана.');
} else {
  print('База данных "app_database" уже существует.');
}

// Подключаемся к созданной или существующей базе данных 'app_database'
db = db.getSiblingDB('app_database');

db.createUser({
  user: 'app_user',
  pwd: 'app_pass',
  roles: [
    {
      role: 'dbOwner',
      db: 'app_database',
    },
  ],
});

print('END #################################################################');
