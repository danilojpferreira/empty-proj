FROM mongo
COPY base.json /base.json
CMD mongoimport --host empty-proj_mongo --db empty-proj --collection empty-proj --drop --file ./base.json