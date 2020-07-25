global.SALT_KEY = "4dd73665-3ff4-4a69-9c43-4f2188651363";
global.EMAIL_TMPL = "Olá, <strong>{0}</strong>, seja bem vindo à Node Store!";

module.exports = {
    connectionString: "mongodb://ndstr:ds012889@mongo:27017/admin?AuthMechanism=SCRAM-SHA-1"
    // connectionString: "mongodb://localhost:32769/admin"
};
