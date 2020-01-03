

-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL auto_increment,
  `name` VARCHAR(64) NULL,
  `email` VARCHAR(64) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

