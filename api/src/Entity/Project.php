<?php
// api/src/Entity/Project.php

 namespace App\Entity;
 
 use ApiPlatform\Core\Annotation\ApiResource;
  use Doctrine\Common\Collections\ArrayCollection;
 use Doctrine\ORM\Mapping as ORM;
 
 #[ORM\Entity]
 #[ApiResource]
 class Project
 {
     #[ORM\Id, ORM\Column, ORM\GeneratedValue]
     private ?int $id = null;
 
 
     #[ORM\Column(type: 'text')]
     public string $content = '';
 
     #[ORM\Column]
     public string $leader = '';
 
     #[ORM\Column]
     public ?\DateTimeImmutable $startDate = null;
 
    #[ORM\ManyToMany(targetEntity: Engineer::class, mappedBy:'projects')]
     public iterable $engineers;
 
     public function __construct()
    {
        $this->engineers = new ArrayCollection();
    }

     public function getId(): ?int
    {
        return $this->id;
    }
}