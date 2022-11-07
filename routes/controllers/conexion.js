const cassandra = require('cassandra-driver');
const redis = require('redis');

const clienteCassandra = () => {
  return new cassandra.Client({
    contactPoints: ['localhost'],
    localDataCenter: 'datacenter1', //No tendría porque cambiar
    keyspace: 'gestionescolar', //nombre de la base de datos a tratar
  });
};

const conRedis = () => {
  const client = redis.createClient();
  return client;
};

module.exports = { cassandra: clienteCassandra, redis: conRedis };
