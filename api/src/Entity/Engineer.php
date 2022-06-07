<?php
// api/src/Entity/Engineer.php

namespace App\Entity;

 use ApiPlatform\Core\Annotation\ApiResource;
 use Doctrine\Common\Collections\ArrayCollection;
 use Doctrine\ORM\Mapping as ORM;

 /** An engineer. */
 #[ORM\Entity]
 #[ApiResource]
 class Engineer
 {


     #[ORM\Id, ORM\Column, ORM\GeneratedValue]
     private ?int $id = null;

     #[ORM\Column]
     public string $name = '';

     #[ORM\Column]
     public string $department = '';

    #[ORM\ManyToMany(targetEntity: Project::class, inversedBy:'engineers')]
    #[ORM\JoinTable(name:'engineers_projects')]
    public iterable $projects;    

    public function __construct()
    {
        $this->projects = new ArrayCollection();
    } 

    public function getId(): ?int
    {
        return $this->id;
    }

 }