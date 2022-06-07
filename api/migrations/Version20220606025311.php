<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220606025311 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE engineers_projects (engineer_id INT NOT NULL, project_id INT NOT NULL, PRIMARY KEY(engineer_id, project_id))');
        $this->addSql('CREATE INDEX IDX_6D1E7123F8D8CDF1 ON engineers_projects (engineer_id)');
        $this->addSql('CREATE INDEX IDX_6D1E7123166D1F9C ON engineers_projects (project_id)');
        $this->addSql('ALTER TABLE engineers_projects ADD CONSTRAINT FK_6D1E7123F8D8CDF1 FOREIGN KEY (engineer_id) REFERENCES engineer (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE engineers_projects ADD CONSTRAINT FK_6D1E7123166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('DROP TABLE engineer_project');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE TABLE engineer_project (engineer_id INT NOT NULL, project_id INT NOT NULL, PRIMARY KEY(engineer_id, project_id))');
        $this->addSql('CREATE INDEX idx_573afcfc166d1f9c ON engineer_project (project_id)');
        $this->addSql('CREATE INDEX idx_573afcfcf8d8cdf1 ON engineer_project (engineer_id)');
        $this->addSql('ALTER TABLE engineer_project ADD CONSTRAINT fk_573afcfcf8d8cdf1 FOREIGN KEY (engineer_id) REFERENCES engineer (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE engineer_project ADD CONSTRAINT fk_573afcfc166d1f9c FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('DROP TABLE engineers_projects');
    }
}
