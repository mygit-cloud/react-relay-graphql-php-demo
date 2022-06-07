<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220606022715 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE engineer_project (engineer_id INT NOT NULL, project_id INT NOT NULL, PRIMARY KEY(engineer_id, project_id))');
        $this->addSql('CREATE INDEX IDX_573AFCFCF8D8CDF1 ON engineer_project (engineer_id)');
        $this->addSql('CREATE INDEX IDX_573AFCFC166D1F9C ON engineer_project (project_id)');
        $this->addSql('ALTER TABLE engineer_project ADD CONSTRAINT FK_573AFCFCF8D8CDF1 FOREIGN KEY (engineer_id) REFERENCES engineer (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE engineer_project ADD CONSTRAINT FK_573AFCFC166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE project DROP CONSTRAINT fk_2fb3d0eef8d8cdf1');
        $this->addSql('DROP INDEX idx_2fb3d0eef8d8cdf1');
        $this->addSql('ALTER TABLE project DROP engineer_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP TABLE engineer_project');
        $this->addSql('ALTER TABLE project ADD engineer_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE project ADD CONSTRAINT fk_2fb3d0eef8d8cdf1 FOREIGN KEY (engineer_id) REFERENCES engineer (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_2fb3d0eef8d8cdf1 ON project (engineer_id)');
    }
}
