-- SQLBook: Code
CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  hashedPassword VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(15),
  location VARCHAR(255)
);

INSERT INTO 
  user (
    firstName,
    lastName,
    email,
    hashedPassword,
    phoneNumber,
    location
  )
VALUES 
  -- password = "toto"
  ('toto', 'toto', 'toto@toto.com', '$argon2id$v=19$m=19456,t=2,p=1$lSXSaqlCctCbuMUYBpZHsA$DURHgxxeoYgrLdZ+egeOuX5js/iZP0Ej1201tCPQNrk', '0123456789', 'tototown'),
  ('Alice', 'Dupont', 'alice.dupont@example.com', '$argon2id$v=19$m=19456,t=2,p=1$lSXSaqlCctCbuMUYBpZHsA$DURHgxxeoYgrLdZ+egeOuX5js/iZP0Ej1201tCPQNrk', '0612345678', 'Paris'),
  ('Bob', 'Martin', 'bob.martin@example.com', '$argon2id$v=19$m=19456,t=2,p=1$lSXSaqlCctCbuMUYBpZHsA$DURHgxxeoYgrLdZ+egeOuX5js/iZP0Ej1201tCPQNrk', '0698765432', 'Lyon'),
  ('Charlie', 'Durand', 'charlie.durand@example.com', '$argon2id$v=19$m=19456,t=2,p=1$lSXSaqlCctCbuMUYBpZHsA$DURHgxxeoYgrLdZ+egeOuX5js/iZP0Ej1201tCPQNrk', '0789654321', 'Marseille'),
  ('David', 'Leclerc', 'david.leclerc@example.com', '$argon2id$v=19$m=19456,t=2,p=1$lSXSaqlCctCbuMUYBpZHsA$DURHgxxeoYgrLdZ+egeOuX5js/iZP0Ej1201tCPQNrk', '0654321789', 'Toulouse'),
  ('Emma', 'Bernard', 'emma.bernard@example.com', '$argon2id$v=19$m=19456,t=2,p=1$lSXSaqlCctCbuMUYBpZHsA$DURHgxxeoYgrLdZ+egeOuX5js/iZP0Ej1201tCPQNrk', '0634578912', 'Bordeaux');

CREATE TABLE pet_type (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(25)
);


INSERT INTO pet_type (
  id,
  name
)
VALUES (
  1,
  'Chat'
),
(
  2,
  'Chien'
),
(
  3,
  'Lapin'
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
  FOREIGN KEY (type_id) REFERENCES pet_type(id)
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
  FOREIGN KEY (pet_type) REFERENCES pet_type(id)
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
VALUES 
  ('Cat sitter', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta enim vitae semper lobortis. Praesent magna velit, luctus non sem vitae, dictum luctus lorem. Proin interdum tortor eget maximus malesuada. Aliquam est elit, tempus id dictum posuere, facilisis ut enim. Nam nec magna cursus urna mollis rutrum. Nulla et scelerisque nulla. Quisque rhoncus tempus urna vitae efficitur. Morbi pharetra dolor non erat maximus vehicula.',1, 'Montpellier', 15, '2025-01-01', '2025-02-01', 1),
  ('Dog Walker', 'Je propose des promenades pour chiens de toutes tailles.', 2, 'Lyon', 20, '2025-01-05', '2025-01-20', 2),
  ('Pet Sitter Lapin', 'Garde à domicile pour lapins, habitat fourni.', 3, 'Marseille', 10, '2025-02-01', '2025-02-15', 3),
  ('Dog Walker', 'Spécialiste en grandes races, promenades en forêt.', 2, 'Toulouse', 25, '2025-01-10', '2025-01-30', 4),
  ('Cat Sitter', 'Garde de chats à domicile avec câlins garantis.', 1, 'Paris', 18, '2025-01-12', '2025-01-25', 1),
  ('Lapin Gardien', 'Gardiennage pour lapins avec suivi quotidien.', 3, 'Bordeaux', 12, '2025-01-15', '2025-01-25', 5),
  ('Chien Promeneur', 'Promenade pour chiens énergiques, plusieurs fois par jour.', 2, 'Montpellier', 22, '2025-02-01', '2025-02-10', 1),
  ('Garde de chat', 'Garde de chat pour le week-end, soin personnalisé.', 1, 'Lyon', 15, '2025-01-20', '2025-01-25', 2),
  ('Promenade de chien', 'Promenade de chien, toutes races acceptées.', 2, 'Marseille', 20, '2025-01-15', '2025-01-30', 3),
  ('Lapin Pension', 'Pension complète pour lapins avec alimentation.', 3, 'Toulouse', 30, '2025-01-25', '2025-02-05', 4),
  ('Garde multi-animaux', 'Garde de plusieurs animaux (chats et lapins) avec flexibilité.', 1, 'Bordeaux', 35, '2025-01-10', '2025-01-20', 5);