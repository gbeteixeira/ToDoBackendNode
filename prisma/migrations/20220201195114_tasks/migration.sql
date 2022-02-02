-- CreateTable
CREATE TABLE `tasks` (
    `id` VARCHAR(191) NOT NULL,
    `macaddress` VARCHAR(191) NOT NULL,
    `type` INTEGER NOT NULL,
    `title` LONGTEXT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `when` DATETIME(3) NOT NULL,
    `done` BOOLEAN NULL DEFAULT false,
    `created` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
