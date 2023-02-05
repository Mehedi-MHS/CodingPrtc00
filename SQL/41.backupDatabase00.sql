
/*

The SQL BACKUP DATABASE Statement
The BACKUP DATABASE statement is used in SQL Server to create a full back up of an existing SQL database.

Syntax
BACKUP DATABASE databasename
TO DISK = 'filepath';
The SQL BACKUP WITH DIFFERENTIAL Statement
A differential back up only backs up the parts of the database that have changed since the last full database backup.

Syntax
BACKUP DATABASE databasename
TO DISK = 'filepath'
WITH DIFFERENTIAL;


Tip: Always back up the database to a different drive than the actual
database. Then, if you get a disk crash, you will not lose your backup
file along with the database.


Tip: A differential back up reduces the back up time (since only the
    changes are backed up).


*/



BACKUP DATABASE DB001
TO DISK = "./databaseBackup/testdb.bak"
WITH DIFFERENTIAL;

-- Not workingg
