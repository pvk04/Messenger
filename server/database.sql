-- создание бд
create database messenger;
use messenger;

-- создание таблиц
create table Person(
	personId int primary key auto_increment,
    personLogin varchar(15) unique not null,
    personPassword varchar(30) not null,
    personName varchar(20) not null,
    personSurname varchar(20) not null,
    personLastname varchar(20) null,
    datebirth date not null,
    gender varchar(20) null,
	isOnline bool not null default false,
    lastOnline datetime not null
);

create table Messages(
	chatId int not null,
    messageId int not null,
    senderId int not null,
    recieverId int not null,
    content text not null,
    createAt datetime not null,
    isViewed bool not null default false,
    primary key (chatId, messageId),
    foreign key (senderId) references Person(personId),
    foreign key (recieverId) references Person(personId)
);

-- триггер на добаление сообщения
DELIMITER $$
CREATE TRIGGER messageIdInsert BEFORE INSERT ON messages
FOR EACH ROW BEGIN
    SET NEW.messageId = (
       SELECT IFNULL(MAX(messageId), 0) + 1 FROM messages
       WHERE chatId  = NEW.chatId
	);
    SET NEW.createAt = current_timestamp();
END $$
DELIMITER ;

-- внечение записейalter
insert into person values 
(1, 'alex', '123456', 'Алексей', 'Громов', 'Викторович', '2004-06-23', 'male', '0', current_date());

insert into person values 
(2, 'andrew', '123456', 'Андрей', 'Кузнецов', 'Павлович', '2004-05-11', 'male', '0', current_date());

insert into person values 
(3, 'jandos', '654321', 'Евгений', 'Бачурин', 'Сергеевич', '2004-07-22', 'male', '0', current_date());

insert into messages values 
(1, 23, 1, 2, 'привет', '2022-06-06 10:00', 1),
(1, 0, 2, 1, 'здравствуй', '2022-06-06 10:00', 0);

insert into messages values (2, 1, 3, 1, 'тест', current_date(), 0);