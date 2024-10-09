CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(15),
  location VARCHAR(255)
);

INSERT INTO 
  user (
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    location
  )
VALUES (
  'toto',
  'toto',
  'toto@toto.com',
  'totototo',
  '0123456789',
  'tototown'
);

CREATE TABLE type (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(25)
);


INSERT INTO type (
  name
)
VALUES (
  'chat'
),
(
  'chien'
),
(
  'lapin'
);

CREATE TABLE pet (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  petName VARCHAR(100) NOT NULL,
  type_id INT UNSIGNED NOT NULL,
  breed VARCHAR(100),
  age INT,
  information TEXT,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (type_id) REFERENCES type(id)
);

INSERT INTO pet (
  petName,
  user_id,
  type_id,
  breed,
  age,
  information
)
VALUES (
  'Loustic',
  1,
  1,
  'Europeen',
  4,
  'Plutot craintif'
);

CREATE TABLE annoncement (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(100),
  content TEXT,
  pet_type INT UNSIGNED, 
  location VARCHAR(100),
  price INT,
  startDate DATE,
  endDate DATE,
  user_id INT UNSIGNED,  
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (pet_type) REFERENCES type(id)
);

INSERT INTO annoncement (
  title,
  content,
  pet_type,
  location,
  price,
  startDate,
  endDate,
  user_id
)
VALUES (
  'Cat sitter',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta enim vitae semper lobortis. Praesent magna velit, luctus non sem vitae, dictum luctus lorem. Proin interdum tortor eget maximus malesuada. Aliquam est elit, tempus id dictum posuere, facilisis ut enim. Nam nec magna cursus urna mollis rutrum. Nulla et scelerisque nulla. Quisque rhoncus tempus urna vitae efficitur. Morbi pharetra dolor non erat maximus vehicula.',
  1,
  'Montpellier',
  15,
  '2025-01-01',
  '2025-02-01',
  1
);